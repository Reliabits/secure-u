import React, { useEffect, useState } from "react";
import { ToastContainer, Bounce, toast } from "react-toastify";
import "../dashboard/dashboard.css";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const lowercaseList = "abcdefghijklmnopqrstuvwxyz";
const uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberList = "0123456789";
const symbolsList = "!@#$%^&*()?";
function Homedashboard() {
    // genrate password
    const [genratePassword, setgenratePassword] = useState("");
    const [lowerCase, setloweCase] = useState(false);
    const [upperCase, setupperCase] = useState(false);
    const [numbers, setNumbers] = useState(false);
    const [symbols, setSymbols] = useState(false);
    const [tabs, setTabs] = useState(0);
    const [sideopen, setSideopen] = useState(true);
    const [sidemblopen, setSidemblopen] = useState(true);
    const [passwordLength, setpasswordLength] = useState(8);

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth < 768) {
                setSidemblopen(false);
            } else {
                setSidemblopen(true);
                setSideopen(false);
            }
        }

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    // Genrate password
    const copyPassword = () => {
        // const copiedText = await navigator.clipboard.readText();
        if (genratePassword.length) {
            navigator.clipboard.writeText(genratePassword);
            toast.success("password copied to clipboard!", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };
    const passwordGenrate = () => {
        let characterlist = "";
        if (lowerCase) {
            characterlist += lowercaseList;
        }
        if (upperCase) {
            characterlist += uppercaseList;
        }
        if (numbers) {
            characterlist += numberList;
        }
        if (symbols) {
            characterlist += symbolsList;
        }
        let temPassword = "";
        const characterlistLength = characterlist.length;
        for (let i = 0; i < passwordLength; i++) {
            const characterIndex = Math.round(Math.random() * characterlistLength);
            temPassword += characterlist.charAt(characterIndex);
        }
        setgenratePassword(temPassword);
    };
    return (
        <>
            <div className="container-fluid">
                {/* <div className="pt-4">
          <div className="row">
            <div className="col-sm-8">
              <h3 className="font-fa text-primary">Welcome User name</h3>
            </div>
            <div className="col-sm-4 text-end">
              <button className="btn logout-btn">Logout</button>
            </div>
          </div>
        </div> */}
                <div className="row mt-5 pt-5">

                    <div
                        className={` ${sidemblopen ? "col-2 sidemenu" : "widthmbl sidemenu2"
                            }  sidemenu2`}
                    >
                        {sidemblopen ? (
                            <>
                                <div className="icon_sidemenu2">
                                    <IoIosArrowBack
                                        onClick={() => setSidemblopen(!sidemblopen)}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="icon_sidemenu2">
                                    <IoIosArrowForward onClick={() => setSidemblopen(true)} />
                                </div>
                            </>
                        )}
                        {sidemblopen && (
                            <div variant="pills" className="flex-column mt-5">
                                <div className="item-nav reset-btn  mx-2 mb-4 py-2">
                                    <p
                                        onClick={() => {
                                            setTabs(0);
                                        }}
                                        className="link-color text-center content-center pt-3 w-100 h-100 "
                                    >
                                        All passwords
                                    </p>
                                </div>
                                <div className="item-nav reset-btn  mx-2 mb-4  py-2">
                                    <p
                                        onClick={() => {
                                            setTabs(1);
                                        }}
                                        className="link-color text-center content-center pt-3 w-100 h-100  "
                                    >
                                        {" "}
                                        Add password
                                    </p>
                                </div>
                                <div className="item-nav reset-btn  mx-2 mb-4  py-2">
                                    <p
                                        onClick={() => {
                                            setTabs(2);
                                        }}
                                        className="link-color text-center content-center pt-3 w-100 h-100 "
                                    >
                                        Genrate Pass
                                    </p>
                                </div>
                                <div className="item-nav reset-btn  mx-2 mb-4  py-2">
                                    <p
                                        onClick={() => {
                                            setTabs(3);
                                        }}
                                        className="link-color text-center content-center pt-3 w-100 h-100 "
                                    >
                                        Add notes
                                    </p>
                                </div>
                                <div className="item-nav reset-btn  mx-2 mb-4  py-2">
                                    <p
                                        onClick={() => {
                                            setTabs(4);
                                        }}
                                        className="link-color text-center content-center pt-3 w-100 h-100 "
                                    >
                                        View notes
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                    <div
                        className={` ${sidemblopen ? " col-10" : "col-12"}  password_tab`}
                    >
                        {sidemblopen ? (
                            <>
                                <div className="icon_sidemenu">
                                    <IoIosArrowBack
                                        onClick={() => setSidemblopen(!sidemblopen)}
                                    />
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="icon_sidemenu">
                                    <IoIosArrowForward onClick={() => setSidemblopen(true)} />
                                </div>
                            </>
                        )}
                        <div>
                            {/* All items page */}
                            {tabs === 0 && (
                                <>
                                    <div eventKey="first" className="">
                                        <div className="row mt-5">
                                            <div className="col-sm-3">
                                                <p className="font-fa">Your email</p>
                                            </div>
                                            <div className="col-sm-3 ">
                                                <p className="font-fa">Your password</p>
                                            </div>
                                            <div className="col-sm-3">
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button variant="secondary">copy email</Button>
                                                    <Button variant="secondary">copy password</Button>
                                                </ButtonGroup>
                                            </div>
                                            <div className="col-sm-3">
                                                <ButtonGroup aria-label="Basic example">
                                                    <Button variant="secondary">Edit</Button>
                                                    <Button variant="secondary">delete</Button>
                                                </ButtonGroup>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Add password pannel */}
                            {tabs === 1 && (
                                <div eventKey="second">
                                    <div className="row mt-4">
                                        <div className="col-sm-4 ">
                                            <input
                                                type="email"
                                                className="form-control custom-input mb-4 font-fa mt-3 "
                                                placeholder="please enter your Url"
                                            />
                                            <input
                                                type="text"
                                                className="form-control custom-input mb-4 font-fa"
                                                placeholder="Enter your category"
                                            />
                                            <input
                                                type="text"
                                                className="form-control custom-input mb-4 font-fa"
                                                placeholder="Enter your username"
                                            />
                                            <input
                                                type="password"
                                                className="form-control custom-input mb-4 font-fa"
                                                placeholder="Enter password username"
                                            />
                                            <button className="btn logout-btn">save data</button>
                                        </div>
                                        <div className="col-sm-7">
                                            <h1 className="font-fa text-primary">
                                                {" "}
                                                Our Dedication to Caring for You
                                            </h1>
                                            <p className="font-fa add-pass-p">
                                                We understand the significance of user trust in our
                                                platform, and that's why transparency is a core value in
                                                our approach to security. We provide users with clear
                                                and concise information about our encryption practices,
                                                assuring them that their data is handled with the utmost
                                                care. Regular security updates and communication
                                                channels are maintained to keep users informed about the
                                                latest security measures and best practices, In
                                                conclusion, the security of personal passwords is a top
                                                priority in our{" "}
                                                <span className="font-fa text-primary">Secure-u</span>{" "}
                                                product. By leveraging modern encryption technology, we
                                                not only encourage users to adopt strong password
                                                practices but also provide them with a secure
                                                environment to store and manage their sensitive data.
                                                The implementation of robust encryption algorithms,
                                                adherence to industry standards, and additional security
                                                features such as 2FA collectively contribute to a
                                                comprehensive security framework that aims to safeguard
                                                user information in the ever-evolving digital landscape.
                                                Our commitment to staying at the forefront of security
                                                measures reflects our dedication to maintaining user
                                                trust and ensuring a safe online experience for all{" "}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Genrate password */}
                            {tabs === 2 && (
                                <div eventKey="third">
                                    <div className="row mt-5">
                                        <div className="col-sm-4">
                                            <div className="input-group mb-3">
                                                <div
                                                    className="input-group-prepend custom-copy"
                                                    onClick={copyPassword}
                                                >
                                                    <span
                                                        className="input-group-text custom-group"
                                                        id="basic-addon1"
                                                    >
                                                        copy
                                                    </span>
                                                    <ToastContainer />
                                                </div>
                                                <input
                                                    type="text"
                                                    disabled
                                                    className="form-control custom-addpass"
                                                    value={genratePassword}
                                                    aria-label="Username"
                                                    aria-describedby="basic-addon1"
                                                />
                                            </div>
                                            <h4 className="font-fa pt-3">Customize your password</h4>
                                            <span className="mt-3 d-flex">
                                                {" "}
                                                <input
                                                    type="checkbox"
                                                    checked={lowerCase}
                                                    onChange={() => setloweCase(!lowerCase)}
                                                />{" "}
                                                <p className="font-fa lower-case">
                                                    Include lower case (a-z)
                                                </p>
                                            </span>
                                            <span className="d-flex">
                                                {" "}
                                                <input
                                                    type="checkbox"
                                                    checked={upperCase}
                                                    onChange={() => setupperCase(!upperCase)}
                                                />{" "}
                                                <p className="font-fa lower-case">
                                                    Include upper case (A-Z)
                                                </p>
                                            </span>
                                            <span className="d-flex">
                                                {" "}
                                                <input
                                                    type="checkbox"
                                                    checked={numbers}
                                                    onChange={() => setNumbers(!numbers)}
                                                />{" "}
                                                <p className="font-fa lower-case">Include number</p>
                                            </span>
                                            <span className="d-flex">
                                                {" "}
                                                <input
                                                    type="checkbox"
                                                    checked={symbols}
                                                    onChange={() => setSymbols(!symbols)}
                                                />{" "}
                                                <p className="font-fa lower-case">Include Symbols</p>
                                            </span>
                                            <span className="d-flex">
                                                {" "}
                                                <input
                                                    type="range"
                                                    min={8}
                                                    max={40}
                                                    defaultValue={passwordLength}
                                                    checked={passwordLength}
                                                    onChange={(event) =>
                                                        setpasswordLength(event.currentTarget.value)
                                                    }
                                                />{" "}
                                                &nbsp;{" "}
                                                <p className="font-fa lower-case">{passwordLength}</p>
                                            </span>
                                            <button
                                                className="btn logout-btn"
                                                onClick={passwordGenrate}
                                            >
                                                Genrate password
                                            </button>
                                        </div>
                                        <div className="col-sm-7 text-left">
                                            <h1 className="font-fa text-primary">
                                                {" "}
                                                A Comprehensive Guide
                                            </h1>
                                            <p className="font-fa add-pass-p">
                                                In today's digital landscape, safeguarding your online
                                                accounts is of paramount importance. One fundamental
                                                step towards enhancing your security is crafting a
                                                robust password. Your web app generates passwords
                                                encompassing lowercase letters (a-z), uppercase letters
                                                (A-Z), numbers (0-9), and symbols (!@#$%^&*()?){" "}
                                                <span className="text-secondary">
                                                    To elevate the strength of your password, consider the
                                                    following guidelines
                                                </span>
                                                <br />
                                                <span className="font-fa text-primary">
                                                    Length Matters:
                                                </span>
                                                Opt for longer passwords, as they inherently provide a
                                                higher level of security. Aim for a minimum of 12
                                                characters to make it more resilient against brute-force
                                                attacks.
                                                <br />
                                                <span className="font-fa text-primary">
                                                    Avoid Common Words:
                                                </span>
                                                Refrain from using easily guessable words or phrases.
                                                This includes names, birthdays, and common dictionary
                                                words. Instead, opt for a combination of unrelated terms
                                                or create an acronym that is meaningful only to you.
                                                <br />
                                                <span className="font-fa text-primary">
                                                    Mix It Up:
                                                </span>{" "}
                                                Incorporate a diverse range of characters. Combine
                                                uppercase and lowercase letters, numbers, and symbols in
                                                a non-predictable manner. This complexity significantly
                                                fortifies your password.
                                                <br />
                                                <span className="font-fa text-primary">
                                                    Steer Clear of Patterns:
                                                </span>{" "}
                                                Avoid using easily recognizable patterns such as "12345"
                                                or "password." These patterns are susceptible to simple
                                                password-cracking techniques.
                                                <br />
                                                <span className="font-fa text-primary">
                                                    Unique for Each Account:
                                                </span>{" "}
                                                While it may be tempting to reuse passwords across
                                                multiple accounts, it's a security risk. If one account
                                                gets compromised, others may follow suit. Use unique
                                                passwords for each account.
                                                <br />
                                                <span className="font-fa text-primary">
                                                    Use a Password Manager:
                                                </span>{" "}
                                                Consider using a reputable password manager to generate,
                                                store, and manage your passwords. This ensures that you
                                                can have unique, complex passwords for each account
                                                without the burden of memorization.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {tabs === 3 && (
                                <div eventKey="forth">
                                    <div className="row mt-4">
                                        <div className="col-sm-4 ">
                                            <input
                                                type="email"
                                                className="form-control custom-input mb-4 font-fa mt-3 "
                                                placeholder="please enter your Description"
                                            />
                                            <textarea
                                                type="textarea"
                                                className="form-control text-area custom-input mb-4 font-fa"
                                                placeholder="Enter your Notes"
                                            />
                                            <button className="btn logout-btn">save data</button>
                                        </div>
                                        <div className="col-sm-7">
                                            <h1 className="font-fa text-primary">
                                                Safeguarding Your Notes with Confidence
                                            </h1>
                                            <p className="font-fa add-pass-p">
                                                At Secure-u, we understand the importance of keeping
                                                your personal and professional notes private and secure.
                                                Whether you're jotting down thoughts, storing sensitive
                                                information, or organizing your ideas, you can trust
                                                Secure-u to keep your data safe from prying eyes. Our
                                                primary goal is to empower you with the confidence to
                                                store your notes online without compromising on
                                                security. One of the key features of Secure-u is its
                                                advanced encryption technology. When you save a note in
                                                Secure-u, it undergoes encryption using state-of-the-art
                                                cryptographic algorithms. This means that your notes are
                                                transformed into unintelligible ciphertext, making them
                                                virtually impossible for unauthorized individuals to
                                                decipher. With encryption at the core of our platform,
                                                you can rest assured that your data remains confidential
                                                and protected from potential threats Moreover, at
                                                Secure-u, we prioritize user privacy above all else.
                                                Unlike other note-taking applications that may
                                                compromise your privacy by selling or sharing your data
                                                with third parties, we adhere to strict privacy policies
                                                to ensure that your information remains confidential. We
                                                do not track your usage patterns, nor do we engage in
                                                any form of data mining. Your notes are yours and yours
                                                alone – we simply provide you with a secure platform to
                                                store them.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {tabs === 4 && (
                                <div eventKey="fifth" className="p-4">
                                    <div>
                                        <div className="row">
                                            <div className="col-sm-12 ">
                                                <table className="table custom-table ">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">id</th>
                                                            <th scope="col"> notes description</th>
                                                            <th scope="col">Notes details</th>
                                                            <th scope="col">action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th scope="row">1</th>
                                                            <td>Some Description</td>
                                                            <td>Some detailsss</td>
                                                            <td><button className="btn btn-danger">delete</button></td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">2</th>
                                                            <td>Jacob</td>
                                                            <td>Thornton</td>
                                                            <td>@fat</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>Larry</td>
                                                            <td>the Bird</td>
                                                            <td>@twitter</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Homedashboard;