import {
    getStorage,
    ref,
    deleteObject,
    uploadBytesResumable,
    getDownloadURL,
} from "firebase/storage";

import app from '../config/firebase';

const storage = getStorage(app);


export const uploadFile = async(image) => {
    const fileName = new Date().getTime() + image.name;
    const StorageRef = ref(storage, "blogs/" + fileName);
    const uploadTask = uploadBytesResumable(StorageRef, image);
    const snapshot = await uploadTask;
    const url = await getDownloadURL(snapshot.ref);
    return url;   
}

export const deleteFile=async(img)=>{
    
    const desertRef = ref(storage,img);
    try {
      await deleteObject(desertRef);
      console.log("File Deleted SuccessFully");
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }