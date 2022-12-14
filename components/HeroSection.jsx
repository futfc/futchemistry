import Link from "next/link";
import PropTypes from "prop-types";
import Image from "next/image";

function HeroSection({ downloadLink }) {
  return (
    <div className="bg-blue-500 overflow-hidden">
      <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
        <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-48 lg:max-w-none lg:mx-0 lg:px-0">
          <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
            <span className="pb-3 block sm:pb-5">FUT Chemistry</span>
          </h1>
          <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
            Helps FUT player finds the best formation to link between FUT card. <br/>
            Fastest algorithm with great UI/UX.
          </p>
          <div className="mt-10 sm:mt-12">
            <div className="grid grid-cols-3">
              <Link href={downloadLink}>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                    src="/images/badge_appstore.png"
                    alt="Get fut chemistry on Appstore."
                    width={564}
                    height={168}
                    layout="responsive"
                    objectFit="cover"
                  />
                </a>
              </Link>
              <Link href={''}>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                      src="/images/badge_google_play.png"
                      alt="Get fut chemistry on Google Play."
                      width={564}
                      height={168}
                      layout="responsive"
                      objectFit="cover"
                  />
                </a>
              </Link>
              <Link href={''}>
                <a target="_blank" rel="noopener noreferrer">
                  <Image
                      src="/images/badge_pwa.png"
                      alt="Get fut chemistry on Google Play."
                      width={564}
                      height={168}
                      layout="responsive"
                      objectFit="cover"
                  />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 sm:mt-16 lg:mt-0">
          <div className="lg:px-0 lg:m-0 lg:relative lg:h-full pl-4 sm:pl-6">
            <Image
              src="/images/app_cover.png"
              alt=""
              className="w-full xl:absolute xl:h-full xl:w-auto xl:max-w-none xl:left-0"
              width={1459}
              height={1800}
              layout="responsive"
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

HeroSection.propTypes = {
  downloadLink: PropTypes.string.isRequired,
};

export default HeroSection;