import React from "react";
import { Link } from "react-router-dom";

const Dropdown = () => {
  return (
    <div class="row dropright-lg">
      <div class="col-4">
        <ul class="list-unstyled">
          <li class="dropdown">
            <a
              class="rounded-circle"
              href="#"
              role="button"
              id="dropdownUser"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <div class="avatar avatar-md avatar-indicators avatar-online">
                <img
                  alt="avatar"
                  src="https://via.placeholder.com/40x40

"
                  class="rounded-circle"
                />
              </div>
            </a>
            <div class="dropdown-menu pb-2" aria-labelledby="dropdownUser">
              <div class="dropdown-item">
                <div class="d-flex py-2">
                  <div class="avatar avatar-md avatar-indicators avatar-online">
                    <img
                      alt="avatar"
                      src="https://via.placeholder.com/40x40"
                      class="rounded-circle"
                    />
                  </div>
                  <div class="ml-3 lh-1">
                    <h5 class="mb-0">Full Name</h5>
                    <p class="mb-0">example@gmail.com</p>
                  </div>
                </div>
              </div>
              <div class="dropdown-divider"></div>
              <div class="">
                <ul class="list-unstyled">
                  <li>
                    <Link
                      to="/"
                      class="dropdown-item"
                      href="@@webRoot/pages/profile-edit.html"
                    >
                      <span class="mr-1">
                        <svg fill="#000000" height="12px" width="12px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Bell"> <path d="M46.6674995,8.6586504c-0.5527992,0-1,0.4473-1,1c0,0.5527992,0.4472008,1,1,1 c3.5185013,0,6.3808022,2.8622999,6.3808022,6.3809004c0,0.5527,0.4473,1,1,1c0.5527992,0,1-0.4473,1-1 C55.0483017,12.4184504,51.2886009,8.6586504,46.6674995,8.6586504z"></path> <path d="M8.9517002,17.0395508c0,0.5527,0.4471998,1,1,1c0.5527,0,1-0.4473,1-1 c0-3.5186005,2.8622999-6.3809004,6.3808002-6.3809004c0.5527992,0,1-0.4472008,1-1c0-0.5527-0.4472008-1-1-1 C12.7114,8.6586504,8.9517002,12.4184504,8.9517002,17.0395508z"></path> <path d="M48.1431007,1.27785c-0.5527992,0-1,0.4473-1,0.9999999s0.4472008,1,1,1 c6.7743988,0,12.2860985,5.5107002,12.2860985,12.2851c0,0.5527992,0.4473,1,1,1s1-0.4472008,1-1 C62.4291992,7.6860499,56.0200005,1.27785,48.1431007,1.27785z"></path> <path d="M16.8560009,2.2778499c0-0.5526999-0.4473-0.9999999-1.000001-0.9999999 c-7.8769999,0-14.2852001,6.4081998-14.2852001,14.2851c0,0.5527992,0.4473001,1,1.0000001,1s1-0.4472008,1-1 c0-6.7743998,5.5107002-12.2851,12.2852001-12.2851C16.4087009,3.2778499,16.8560009,2.83055,16.8560009,2.2778499z"></path> <path d="M51.7932014,46.2020493c-0.1280022-0.3828011-0.3692017-0.6965981-0.6621017-0.9463997 c0.0236015-0.6092987,0.0386009-1.2222977,0.0386009-1.8409996c0-13.6198997-5.641201-25.1546001-13.4345016-29.1104012 c0.1161003-0.4706001,0.1844025-0.9601002,0.1844025-1.4666996c0-3.3774004-2.7380028-6.1154003-6.1154022-6.1154003 s-6.1153984,2.7379999-6.1153984,6.1154003c0,0.5065994,0.0682983,0.9960995,0.1843987,1.4666996 C18.0799007,18.2600498,12.4386997,29.7947502,12.4386997,43.41465c0,0.6187019,0.0150003,1.2317009,0.0386,1.8409996 c-0.2929001,0.2498016-0.5340996,0.5635986-0.6620998,0.9463997l-2.8975,8.6665993 c-0.4692001,1.4033012,0.5754004,2.8535004,2.0555,2.8535004h14.1247005c0.8610001,2.8908005,3.535799,5,6.7062988,5 s5.8453026-2.1091995,6.7063026-5h14.1246986c1.4800987,0,2.5247002-1.4501991,2.0555-2.8535004L51.7932014,46.2020493z M26.7959003,16.1219501l1.4443989-0.7332001l-0.3878994-1.5727005c-0.0841999-0.3413-0.1252003-0.6613998-0.1252003-0.9784994 c0-2.2480001,1.8290005-4.0769005,4.0769997-4.0769005s4.0769997,1.8289003,4.0769997,4.0769005 c0,0.3170996-0.0410004,0.6371994-0.1251984,0.9784994l-0.3879013,1.5727005L36.8125,16.1219501 c7.2531013,3.6816006,12.3186989,14.9046993,12.3186989,27.2926998c0,0.4183006-0.0060997,0.8419991-0.0181007,1.2691002 H14.4953003c-0.0120001-0.4271011-0.0181007-0.8507996-0.0181007-1.2691002 C14.4771996,31.0266495,19.5428009,19.8035507,26.7959003,16.1219501z M31.8041992,60.7221489 c-2.0464001,0-3.8094997-1.2355003-4.5824986-3h9.164999C35.6137009,59.4866486,33.8506012,60.7221489,31.8041992,60.7221489z M52.7711983,55.6526489c-0.0500984,0.0695-0.1102982,0.0695-0.1359978,0.0695H38.8041992h-14H10.9731998 c-0.0256996,0-0.0859003,0-0.1359997-0.0695c-0.0496998-0.0690994-0.0307999-0.1256981-0.0227003-0.1497993l2.8975-8.6665993 c0.0229006-0.0681992,0.0866003-0.1141014,0.1588001-0.1141014h35.8667984c0.0722008,0,0.1359024,0.0459023,0.158802,0.1140022 l2.8974991,8.6666985C52.8019981,55.5269508,52.8209,55.5835495,52.7711983,55.6526489z"></path> </g> </g></svg>
                      </span>
                      Notification{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/"
                      class="dropdown-item"
                      href="@@webRoot/pages/profile-edit.html"
                    >
                      <span class="mr-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-user"
                        >
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                          <circle cx="12" cy="7" r="4"></circle>
                        </svg>
                      </span>
                      Profile{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/status"
                      class="dropdown-item"
                      href="@@webRoot/pages/student-subscriptions.html"
                    >
                      <span class="mr-2">
                        <svg
                          fill="#000000"
                          width="12px"
                          height="12px"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                          <g
                            id="SVGRepo_tracerCarrier"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></g>
                          <g id="SVGRepo_iconCarrier">
                            <path d="M20.929,1.628A1,1,0,0,0,20,1H4a1,1,0,0,0-.929.628l-2,5A1.012,1.012,0,0,0,1,7V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V7a1.012,1.012,0,0,0-.071-.372ZM4.677,3H19.323l1.2,3H3.477ZM3,21V8H21V21Zm8-3a1,1,0,0,1-1,1H6a1,1,0,0,1,0-2h4A1,1,0,0,1,11,18Z"></path>
                          </g>
                        </svg>
                      </span>
                      Borrowed Status{" "}
                    </Link>
                  </li>
                  <li>
                    <Link to="/" class="dropdown-item" href="#!">
                      <span class="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          class="feather feather-settings"
                        >
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                      </span>
                      Settings
                    </Link>
                  </li>
                </ul>
              </div>
              <div class="dropdown-divider"></div>
              <ul class="list-unstyled">
                <li>
                  <Link
                    to="/"
                    class="dropdown-item"
                    href="@@webRoot/index.html"
                  >
                    <span class="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="feather feather-power"
                      >
                        <path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path>
                        <line x1="12" y1="2" x2="12" y2="12"></line>
                      </svg>
                    </span>
                    Sign Out{" "}
                  </Link>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dropdown;
