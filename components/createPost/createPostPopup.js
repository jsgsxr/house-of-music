import styles from '../../styles/createPost.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faGlobeAsia, faUserFriends, faCaretDown, faImages, faUserTag, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import CreatePostButton from './CreatePostButton'

export default function CreatePostPopup(props) {
  const [dropDown, setDropDown] = useState(false)
  const [scopeSelect, setScopeSelect] = useState("public")
  const [disableButton, setDisableButton] = useState("")
  const [postText, setPostText] = useState("")
  const [postContent, setPostContent] = useState(null)
  const [shareable, setShareable] = useState(true)

  const handleTextInput = event => {
    setDisableButton(event.target.value)
    setPostText(event.target.value)
  }
  const handleFileChange = event => {
    setPostContent(event.target.files[0])
  }

  const selectedScope = () => {
    if (scopeSelect == "public") {
      return (
        <div>
          <FontAwesomeIcon className={styles.scopeIcon} icon={faGlobeAsia} />
          Public
          <FontAwesomeIcon className={styles.dropdownIcon} icon={faCaretDown} />
        </div>
      )
    } else if (scopeSelect == "friends") {
      return (
        <div>
          <FontAwesomeIcon className={styles.scopeIcon} icon={faUserFriends} />
          Friends
          <FontAwesomeIcon className={styles.dropdownIcon} icon={faCaretDown} />
        </div>
      )
    }
  }

  const handleDropdown = () => {
    {dropDown ? (setDropDown(false)) : (setDropDown(true))}
    console.log(dropDown, "dropdown" )
  }
  const handleSelectPublic = () => {
    setScopeSelect("public")
    setDropDown(false)
    setShareable(true) 
    console.log(scopeSelect)
    console.log(shareable)
  }
  const handleSelectFriends = () => {
    setScopeSelect("friends")
    setDropDown(false)
    setShareable(false)
    console.log(scopeSelect)
  }

  return (
    <div className={styles.opaqueBackgroundDiv}>
      <div className={styles.popupDiv}>
        <div className={styles.popupHeader}>
          <p className={styles.popupTitle}>Create Post</p>
          <div className={styles.closeIconDiv} onClick={props.handleOpen}>
            <FontAwesomeIcon className={styles.closeWindowIcon} icon={faTimes} />
          </div>
        </div>
        <div className={styles.popupPostContent}>
          <form className={styles.createPostForm}>
            <div className={styles.popupContentProfileDiv}>
              <div className={styles.profileImgDiv}>
                <Image className={styles.profileImg} src={props.session.user.image} width="45px" height="45px" alt="profile" />
              </div>
              <div className={styles.popupNameWithSelectDiv}>
                <p className={styles.userName}>{props.session.user.name}</p>
                <div className={styles.postScopeSelect} onClick={handleDropdown}>
                    {selectedScope()}
                </div>
                {dropDown ? 
                (<div className={styles.scopeSelectDiv}>
                  <div className={styles.publicDropdown} onClick={handleSelectPublic}>
                    <FontAwesomeIcon className={styles.scopeIcon} icon={faGlobeAsia} />
                    Public
                  </div>
                  <div className={styles.friendsDropdown} onClick={handleSelectFriends}>
                    <FontAwesomeIcon className={styles.scopeIcon} icon={faUserFriends} />
                    Friends
                  </div>
                </div>) : (null)}
              </div>
            </div>
            <div className={styles.popupContentText}>
              <textarea className={styles.postTextInput} autoCorrect="on" placeholder={"What's on your mind, " + props.session.user.name.split(" ")[0] + "?"} onChange={handleTextInput} value={disableButton} required />
            </div>
            {postContent ? (
              <div className={styles.filePreview}>
                <FontAwesomeIcon className={styles.imagePreviewIcon} icon={faImages} />
                <p className={styles.fileName}>{postContent.name}</p>  
              </div>
            ) : (null)}
            <div className={styles.popupPostAddons}>
              <p className={styles.addonText}>Add to Your Post:</p>
              <div className={styles.addonIconsDiv}>
                <label htmlFor="file">
                  <FontAwesomeIcon className={styles.imageIcon} icon={faImages} />
                </label>
                <input className={styles.imageInput} type="file" id="file" onChange={handleFileChange} />
                <FontAwesomeIcon className={styles.tagIcon} icon={faUserTag} />
                <FontAwesomeIcon className={styles.checkinIcon} icon={faMapMarkerAlt} />
              </div>
            </div>
            <CreatePostButton postText={postText} postContent={postContent} shareable={shareable} disableButton={disableButton} /> 
          </form> 
        </div>
      </div>
    </div>
  )
}