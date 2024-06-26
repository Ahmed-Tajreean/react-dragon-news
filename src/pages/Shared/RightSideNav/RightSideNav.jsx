import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone2.png'
import qzone3 from '../../../assets/qZone3.png'

const RightSideNav = () => {
    return (
        <div>
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Login With</h2>
                <button className="btn btn-outline w-full">
                    <FaGoogle />  Login with Google
                </button>
                <button className="btn btn-outline w-full">
                    <FaGithub />  Login with Github
                </button>
            </div>
            <div className="p-4 mb-6">
                <h2 className="text-3xl mb-4">Find us on</h2>
                <a href="" className="p-4 flex text-lg items-center border rounded-t-lg">
                    <FaFacebook className="mr-2"></FaFacebook>
                    <span>Facebook</span>
                </a>
                <a href="" className="p-4 flex text-lg items-center border-x">
                    <FaTwitter className="mr-2"></FaTwitter>
                    <span>Twitter</span>
                </a>
                <a href="" className="p-4 flex text-lg items-center border rounded-b-lg">
                    <FaInstagram className="mr-2"></FaInstagram>
                    <span>Instagram</span>
                </a>
            </div>
            {/* q zone */}
            <div className="p-4 space-y-3 mb-6">
                <h2 className="text-3xl">Q zone</h2>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>



    );
};

export default RightSideNav;