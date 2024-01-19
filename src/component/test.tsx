import React, {useEffect, useRef, useState} from 'react';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from "firebase/storage";
import {app} from "../firebase/firebase.ts";

function Test(props) {
    const profileRef = useRef();
    const [profileFile, setProfileFile] = useState([])
    const [profileUrl, setProfileUrl] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const handleUpload = (file: any) => {
        setIsLoading(true);
        const storage = getStorage(app);
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, fileName);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
            "state_changed",
            (snapshot) => {


            },
            (error) => {
                setIsLoading(false);

            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
                    console.log(downloadUrl);
                    setProfileUrl(downloadUrl);
                    setIsLoading(false);
                });

            }
        );
    };

    useEffect(() => {
        if (profileFile) {
            handleUpload(profileFile)
        }
    }, [profileFile]);


    return (
        <div>
            <input
                onChange={(e) => setProfileFile(e.target.files[0])}
                className="hidden"
                type="file"
                accept="image/*"
                ref={profileRef}
            />
            <div className=' rounded-full  cursor-pointer'>
                <img
                    onClick={() => profileRef.current?.click()}
                    className=' h-60 w-60 rounded-full '
                    src={profileUrl || "https://www.shutterstock.com/image-vector/vector-flat-illustration-grayscale-avatar-600nw-2281862025.jpg"}
                    alt="img"/>
            </div>
            {
                isLoading && (<p className={'text-blue-700 text-[20px]'}>Loading...</p>)
            }
        </div>
    );
}

export default Test;