import React from "react";

import { FaUserAlt } from 'react-icons/fa';
import "cropperjs/dist/cropper.min.css";
import Cropper from "react-cropper";
import styles from "../../assets/scss/componentsStyles/ImageCropper.module.scss";

const ImageCropper = () => {

    const base64StringtoFile = (base64String, filename) => {
        var arr = base64String.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n)
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n)
        }
        return new File([u8arr], filename, { type: mime })
    }

    const handleFileUpload = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        if (files.length !== 0) {
            const reader = new FileReader();
            reader.onload = () => {
                this.setState({ image: reader.result, showBtn: true });
            };
            reader.readAsDataURL(files[0]);
        }
    }

    const getCropData = () => {
        if (typeof this.state.cropper !== "undefined") {
            let imageBase64 = this.state.cropper.getCroppedCanvas().toDataURL();
            let file = this.base64StringtoFile(imageBase64, "file_for_upload");
            if (file.size > "10485760") {
                return this.setState({ error: "Maximum allowed file size is 100 000 bytes." })
            }

            this.setState({ cropData: this.state.cropper.getCroppedCanvas().toDataURL(), error: "" });
            this.props.onSetImageFileState(file);
        }
        else {
            console.log('error');
        }
    };

    const resetState = () => {
        this.setState({
            imageSrc: "",
            image: "",
            cropData: "",
            cropper: "",
            imageFile: "",
            showBtn: false,
            checked: false,
            error: ""
        });
        this.props.onSetImageFileState(null);
    }
    return (
        <div className={styles.cropperContent}>
            <label>Choose your profile picture : </label>
            <Cropper
                className={styles['cropperContent-cropper']}
                zoomTo={0.1}
                aspectRatio={1}
                initialAspectRatio={1}
                preview=".img-preview"
                src={""}
                viewMode={1}
                background={false}
                responsive={true}
                autoCropArea={1}
                checkOrientation={false} // https://github.com/fengyuanchen/cropperjs/issues/671
                //   onInitialized={(instance) => {
                //     this.setState({ cropper: instance, showBtn: false });
                //   }}
                guides={true}
            />
            <div className={styles['cropperContent-imageContainer']}>
                <img className={styles['cropperContent-imageContainer-image']} src={"" ? <FaUserAlt /> : ""} alt="cropped" />
                <div className={styles['cropperContent-imageContainer-file']}>
                    <input type="file" className={styles['cropperContent-imageContainer-fileInput']} />
                </div>
                <div className={styles['cropperContent-imageContainer-checkBox']} >
                    <label>
                        <input
                            type="checkbox"
                            name="defaultPicture"
                            className={styles['cropperContent-imageContainer-checkBox-defaultCheckBox']}
                        //   checked={this.state.checked ? "checked" : null}
                        //   onClick={() => this.setState({ cropData: defaultImageSrc })}
                        //   onChange={this.resetState}
                        //   label="Click HERE if you don't want to upload image." />
                        />
                        Click HERE if you don't want to upload image.</label>
                </div>
            </div>
            <div className={styles['cropperContent-imageContainer-cropperButton']}>
                {false ? <button /*onClick={this.getCropData} */ > Crop Image</button> : null}
            </div>
        </div>
    );
}

export default ImageCropper;