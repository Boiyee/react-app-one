
function ProfilePicture() {

    const image1 = './src/assets/Eren.png';

    const handleClick = (e) => e.target.style.display = 'none';
    

    return (
        <>
        <img onClick={(e) => handleClick(e)} src={image1} alt="" />
        </>
    )
};

export default ProfilePicture;