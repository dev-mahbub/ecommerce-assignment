import Image from "next/image";
import Link from "next/link";
import React from "react";
import errorImg from "../../../public/assets/images/error/not-found.png";

const page = () => {
  return (
    <>
      {/* -- error area start -- */}
      <div className="container-xxl">
        <div className="error-wrapper">
          <div className="error-thumb mb-8">
            <Image
              src={errorImg}
              priority
              style={{ width: "100%", height: "auto" }}
              alt="image"
            />
          </div>
          <div className="error-content">
            <h2>Page is Not Found</h2>
            <p>
              {`Don't`} worry, you can head back to the homepage or use the navigation
              menu to find what you need
            </p>
            <div className="flex justify-center items-center gap-3">
              <button className="border border-border dark:border-border-dark px-3 py-1.5 rounded-md">
                <i className="fa-regular fa-chevron-left mr-2"></i>
                Go back
              </button>
                <div className="error-btn">
              <Link href="/" className="btn btn-primary rounded-pill xxl">
                Back to Home
              </Link>
            </div>
            </div>
          </div>
        </div>
      </div>
      {/* -- error area end -- */}
    </>
  );
};

export default page;
