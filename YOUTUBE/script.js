const getVideo =async(search)=>{
    let req= await fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=YouTube+Data+API&type=video&key=AIzaSyA_pVjj6--TXhG-29HV7ySisKiLFrerUDQ")
    let res=await req.json()
    console.log(res);
    getVideo()
}
getVideo("js")

let videos=localStorage.getItem("videoId")