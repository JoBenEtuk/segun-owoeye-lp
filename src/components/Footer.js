import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const query = useStaticQuery(graphql`
    {
      allContentfulHomePage {
        nodes {
          email
          phone
          aboutUs {
            disclaimer {
              disclaimer
            }
          }
          linkedinLink
          instagramLink
          facebookLink
          twitterLink
        }
      }
    }
  `)

    const data = query.allContentfulHomePage.nodes[0];
    console.log(data)
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__left">
                    <h3>Contact us</h3>
                    <ul>
                        <li>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.0499 5C16.0267 5.19057 16.9243 5.66826 17.628 6.37194C18.3317 7.07561 18.8094 7.97326 18.9999 8.95M15.0499 1C17.0792 1.22544 18.9715 2.13417 20.4162 3.57701C21.8608 5.01984 22.7719 6.91101 22.9999 8.94M21.9999 16.92V19.92C22.0011 20.1985 21.944 20.4742 21.8324 20.7293C21.7209 20.9845 21.5572 21.2136 21.352 21.4019C21.1468 21.5901 20.9045 21.7335 20.6407 21.8227C20.3769 21.9119 20.0973 21.9451 19.8199 21.92C16.7428 21.5856 13.7869 20.5341 11.1899 18.85C8.77376 17.3147 6.72527 15.2662 5.18993 12.85C3.49991 10.2412 2.44818 7.27099 2.11993 4.18C2.09494 3.90347 2.12781 3.62476 2.21643 3.36162C2.30506 3.09849 2.4475 2.85669 2.6347 2.65162C2.82189 2.44655 3.04974 2.28271 3.30372 2.17052C3.55771 2.05833 3.83227 2.00026 4.10993 2H7.10993C7.59524 1.99522 8.06572 2.16708 8.43369 2.48353C8.80166 2.79999 9.04201 3.23945 9.10993 3.72C9.23656 4.68007 9.47138 5.62273 9.80993 6.53C9.94448 6.88792 9.9736 7.27691 9.89384 7.65088C9.81408 8.02485 9.6288 8.36811 9.35993 8.64L8.08993 9.91C9.51349 12.4135 11.5864 14.4864 14.0899 15.91L15.3599 14.64C15.6318 14.3711 15.9751 14.1858 16.3491 14.1061C16.723 14.0263 17.112 14.0555 17.4699 14.19C18.3772 14.5286 19.3199 14.7634 20.2799 14.89C20.7657 14.9585 21.2093 15.2032 21.5265 15.5775C21.8436 15.9518 22.0121 16.4296 21.9999 16.92Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {data.email}
                        </li>
                        <li>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M22 6L12 13L2 6" stroke="#806F36" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            {data.phone}
                        </li>
                    </ul>
                    <div className="borderline"></div>
                    <div className="social-links">
                        <h5>Follow us on:</h5>
                        <div className="social-links__item">
                            <a href={data.twitterLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005V3.00005Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href={data.instagramLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17 2H7C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16.0002 11.3701C16.1236 12.2023 15.9815 13.0523 15.594 13.7991C15.2065 14.5459 14.5933 15.1515 13.8418 15.5297C13.0903 15.908 12.2386 16.0397 11.408 15.906C10.5773 15.7723 9.80996 15.3801 9.21503 14.7852C8.62011 14.1903 8.22793 13.4229 8.09426 12.5923C7.9606 11.7616 8.09226 10.91 8.47052 10.1584C8.84878 9.40691 9.45438 8.7938 10.2012 8.4063C10.948 8.0188 11.7979 7.87665 12.6302 8.00006C13.4791 8.12594 14.265 8.52152 14.8719 9.12836C15.4787 9.73521 15.8743 10.5211 16.0002 11.3701Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.5 6.5H17.51" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href={data.facebookLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                            <a href={data.linkedinLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 9H2V21H6V9Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8V8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__right">
                    <svg width="70" height="61" viewBox="0 0 70 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.8524 26.3783C21.9024 26.1254 21.2557 25.4621 20.3694 24.8532C19.3876 24.178 18.8735 23.708 17.9009 22.9482C9.15489 16.1157 13.2344 8.89534 19.2074 8.89534C22.7636 8.89534 27.5918 10.0074 27.5918 13.2667C27.5918 17.041 23.267 21.4085 22.8524 26.3796V26.3783ZM0.615456 13.9936V16.9074C0.615456 25.0716 9.5139 32.2602 15.1901 36.5826C17.6267 38.4373 20.5111 40.8124 22.0097 43.6097C28.2343 55.2292 15.7731 58.4515 5.00506 56.9568C3.49328 56.7477 2.14181 56.279 0.614131 56.2446L0.159668 60.2439C4.11999 61.1548 44.0876 60.616 51.6491 60.616C50.6475 59.251 50.4541 60.2307 46.5838 59.1213C40.8905 57.4903 38.4008 55.9044 34.2418 51.7845C21.9501 39.605 24.0634 18.0644 41.4522 8.17649C47.6861 4.63119 56.0467 4.43923 62.91 6.74937C65.6832 7.68267 68.1171 9.34944 69.1466 9.62348C67.9634 6.35618 56.7437 2.06025 52.823 1.16532C45.174 -0.582181 27.2473 0.153886 18.4747 0.153886C14.1513 0.153886 9.29267 2.13174 6.69572 4.04737C3.6748 6.27542 0.612806 10.1768 0.612806 13.9949L0.615456 13.9936Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M38.4854 32.6755C38.4854 46.7667 54.827 53.9849 64.984 44.2832C74.5153 35.1789 68.9548 16.9729 53.9289 16.9729C49.5651 16.9729 45.2366 19.2971 43.0514 21.616C40.7644 24.0437 38.4854 28.055 38.4854 32.6768V32.6755Z" fill="#248C8C" />
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="70" height="60.9901" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>
                    <h3>Disclaimer</h3>
                    <p>{data.aboutUs.disclaimer.disclaimer}</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
