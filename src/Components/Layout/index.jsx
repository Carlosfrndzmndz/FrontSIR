import logo from '../../assets/logo/Logo.svg';

const Layout = ({ children }) => {
    const containerStyle = {
    };

    const backgroundStyle = {
        backgroundImage: `url(${logo})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        opacity: 0.5,
        width: '100%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: -1,
    };

    return (
        <>
            <div className='flex-col flex mt-20 items-center'>
                {children}
            </div>
            {/*<div className='mt-20' style={backgroundStyle}></div>*/}
        </>
    );
};

export default Layout;
