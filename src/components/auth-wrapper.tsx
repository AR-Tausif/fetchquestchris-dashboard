import { ReactNode } from "react";
const BgImage = "https://s3-alpha-sig.figma.com/img/d3ed/09f7/252004e28d933592d719d0fca45e5787?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pyofE5OMfETp3qGRGh8VXqJ2VeYBLJHpQv5L4KG~lqKPkUF5-51Ehdz7M05RcFYWpS4eUcR7vnFrwqG4UEy~0r5ANRmQu5w741E1dwSSp~bCEbLdRw5THQD2M8xTABBNz3wrut8a1HnheJFKrzXZmUIsVrJdZ7Rbx0A5~Kr2sYmpZv4NlbRKAmAyOSpYmPIHw-IAVDGrYJsaZnnhYX1nPrYQaKLgLTaIBEMxGVhfMOc2bewubHSqnhQcBsNlsJKznoaVj-0jR0~n-pUGU8Gwg5U8tBbxREspVnXaOwo2paDilcicIwlnX2k4ikLhyz58O~czE7KyQY4GfSixKqu5RA__";
export const AuthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="login-page"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      {children}
    </div>
  );
};
