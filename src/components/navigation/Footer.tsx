import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-hot-toast";

const Footer = () => {
  return (
    <div className="pt-4 overflow-x-hidden bg-[#f3f4f6] dark:bg-[#1b1b1b] text-gray-800 dark:text-white">
      {/* Top Footer */}
      <footer className="flex flex-col sm:flex-row justify-between p-10 gap-8">
        {/* Services */}
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold text-lg mb-2">Services</h6>
          <a className="hover:text-green-500 transition">Rating</a>
          <a className="hover:text-green-500 transition">Marketing</a>
          <a className="hover:text-green-500 transition">Advertisement</a>
        </nav>

        {/* Company */}
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold text-lg mb-2">Company</h6>
          <a className="hover:text-green-500 transition">About us</a>
          <a className="hover:text-green-500 transition">Contact</a>
          <a className="hover:text-green-500 transition">Jobs</a>
        </nav>

        {/* Send Feedback */}
        <nav className="flex flex-col gap-2">
          <h6 className="font-bold text-lg mb-2">Send Your Feedback</h6>
          <div className="flex flex-col sm:flex-row items-center gap-2">
            <label className="flex items-center gap-2 border border-gray-300 dark:border-gray-700 rounded-md px-2 py-1 w-full sm:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="text"
                placeholder="Your Feedback"
                className="grow bg-transparent outline-none text-gray-800 dark:text-white"
              />
            </label>
            <button
              className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition"
              onClick={() => {
                toast("🤩 Feedback sent successfully");
              }}
            >
              Send <FaPaperPlane />
            </button>
          </div>
        </nav>
      </footer>

      {/* Bottom Footer */}
      <footer className="border-t border-gray-300 dark:border-gray-700 px-10 py-4 flex flex-col md:flex-row justify-between items-center gap-4">
        <aside className="flex items-center gap-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z" />
          </svg>
          <p>
            Asum Gamer BD
            <br />
            Providing reliable Blog since 2020
          </p>
        </aside>

        <nav className="flex flex-wrap gap-4 text-2xl">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#4267B2] hover:text-blue-600 transition">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#1DA1F2] hover:text-blue-400 transition">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-pink-600 transition">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="text-[#4267B2] hover:text-blue-600 transition">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:text-gray-400 transition">
            <i className="fab fa-x-twitter"></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="text-[#E1306C] hover:text-red-600 transition">
            <i className="fab fa-youtube"></i>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
