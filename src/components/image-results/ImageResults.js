import React,{useState} from 'react';
import { IconButton,Dialog, Avatar,DialogActions,DialogTitle,DialogContent } from '@material-ui/core'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import VisibilityIcon from '@material-ui/icons/Visibility';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';


export const ImageResults = (props) => {
    const [openDialog,setOpenDialog] = useState(false);
    const [currentImg,setCurrentImg] = useState('');
    const [currentImgUser,setCurrentImgUser] = useState('');
    const [currentImgUserName,setCurrentImgUserName] = useState('');
    const [currentImgTags,setCurrentImgTags] = useState('');
    const handleDialogOpen  = () => {
        setOpenDialog(true);
        setCurrentImg(props.imgUrl);
        setCurrentImgUser(props.userImage);
        setCurrentImgUserName(props.userName);
        setCurrentImgTags(props.tags)
    }
    const handleDialogClose = () => {
        setOpenDialog(false);

    }
    return (
            <div className="imageBlock" >
                <img src={props.imgUrl} alt={props.alt} />
                <div className="imageMetaBlock">
                    <div className="imageMetaLeft">
                    <p><strong>Likes:</strong>  {props.likes}</p>
                <p><strong>Downloads:</strong>  {props.downloads}</p>
                    </div>
                    <div className="imageMetaRight">
                        <div title={props.user} aria-label={props.user}>
                            <Avatar src={props.userImage} />
                        </div>
                    </div>
                </div>
                <a className="download_btn" href={props.imagePageUrl} target="_blank" rel="noreferrer">
                    <CloudDownloadIcon />
                </a>
                <span className="views" title="views">
                    <VisibilityIcon className="visibleIcon" />
                    {props.views}
                </span>
                <button className="dialogBtn" title="Click to view Large Image" onClick={handleDialogOpen}>
                    <ZoomInIcon className="zoomIcon"/>
                </button>
                <Dialog onClose={handleDialogClose} aria-labelledby="customized-dialog-title" open={openDialog}>
                    <DialogTitle className="imgpopUpHeader" onClose={handleDialogClose}>
                        <Avatar src={currentImgUser} />{currentImgUserName}
                        <IconButton onClick={handleDialogClose}>
                        <HighlightOffIcon  />
                    </IconButton>
                    </DialogTitle>
                    <DialogContent dividers>
                        <img src={currentImg} className="dialog_image" alt={currentImgTags} />
                    </DialogContent>
                    <DialogActions class="dialogFooter">
                        <span className="tags" ><strong>Tags:</strong>&nbsp; {currentImgTags}</span>
                    </DialogActions>
                </Dialog>
            </div>
    )
}
