import React, { useEffect, useState } from 'react'
import '../public/css/style.css'
import '../public/css/flatsome.css'
import LOGO from '../images/banner-logo-map/logo.png'
import BANNER8 from '../images/banner-logo-map/8_banner.jpg'
import TONGQUAN from '../images/banner-logo-map/tong-quan.jpg'
import BANNERSM8 from '../images/banner-logo-map/8_bannersm.jpg'
import VITRI from '../images/banner-logo-map/vitri.svg'
import PHANKHUCENTURYPARK from '../images/banner-logo-map/Phan-khu-Century-Park.jpg'

import BG2 from '../images/banner-logo-map/bg-2.jpg'
import CENTURYDAYTU from '../images/banner-logo-map/Century-City-dau-tu-mot-lan-huong-loi-tron-doi.jpg'
import CONTACTNOW from '../images/banner-logo-map/contact-now.gif'
import LOGOKOOANGH from '../images/banner-logo-map/logokooanhg.png'
import PHANKHUCENTURYCITY from '../images/banner-logo-map/Phan-khu-Century-City.jpg'
import PHANKHUCENTURYGARDEN from '../images/banner-logo-map/Phan-khu-Century-Garden.jpg'
import PHANLOBINHSON from '../images/banner-logo-map/Phan-lo-Binh-Son.jpg'
import TIENICHLIENKET from '../images/banner-logo-map/Tien-ich-lien-ket-Century-City.png'
import TONGQUAN1 from '../images/banner-logo-map/tong-quan-01.jpg'
import PHONE from '../images/banner-logo-map/phone_icon.png'
import ZALO from '../images/banner-logo-map/zalo.png'
import POPUP from '../images/banner-logo-map/popup.jpg'
import CROSS from '../images/banner-logo-map/cross.png'

import CS850 from '../images/chinh-sach/850.jpeg'
import CS2596 from '../images/chinh-sach/2596.jpg'
import CS7804 from '../images/chinh-sach/7804.jpeg'
import CS8006 from '../images/chinh-sach/8006.jpeg'
import CHINHSACH03191431 from '../images/chinh-sach/03191431-1-chinh-sach-du-an-century-city.jpg'
import CHINHSACH03191440 from '../images/chinh-sach/03191440-2-chinh-sach-du-an-century-city.jpg'
import CHINHSACH03191450 from '../images/chinh-sach/03191450-3-chinh-sach-du-an-century-city.jpg'
import CHINHSACH03191500 from '../images/chinh-sach/03191500-4-chinh-sach-du-an-century-city.jpg'
import CHINHSACH03191510 from '../images/chinh-sach/03191510-5-chinh-sach-du-an-century-city.jpg'
import CHINHSACH03191521 from '../images/chinh-sach/03191521-6-chinh-sach-du-an-century-city.jpg'
import CHINHSACH03191531 from '../images/chinh-sach/03191531-7-chinh-sach-du-an-century-city.jpg'
import CHINHSACH06144945 from '../images/chinh-sach/06144945-bang-gia-century-city.jpeg'
import KHOICONG14141708 from '../images/chinh-sach/14141708-khoi-cong.jpeg'
import CHINHSACH22213016 from '../images/chinh-sach/22213016-cong-chinh-du-an-century-city-nam-2021.jpg'
import SHOPHOUSE25214402 from '../images/chinh-sach/25214402-gia-shophouse-century-city.jpg'

import CONGVIEN from '../images/chinh-sach/Cong-vien-Century_Park.jpg'
import HOBOI from '../images/chinh-sach/Ho-boi.jpg'
import TTTM from '../images/chinh-sach/Trung-tam-thuong-mai.jpg'
import TRUONGHOC from '../images/chinh-sach/Truong-hoc-tu-mam-non-den-THCS.jpg'

import DEFAULT from '../images/nha-mau/defaultpn.jpg'
import MAU1 from '../images/nha-mau/mau-1.jpg'
import MAUNHAVUON from '../images/nha-mau/mau-nha-vuon.jpg'
import MAUSHOP from '../images/nha-mau/mau-shop.jpg'
import PHO1 from '../images/nha-mau/pho1.jpg'

import P119636 from '../images/photo/o8-119636.jpg'
import P279648 from '../images/photo/o8-279648.jpg'
import P301888 from '../images/photo/o8-301888.jpg'
import P435680 from '../images/photo/o8-435680.jpg'
import P551418 from '../images/photo/o8-551418.jpg'
import P742879 from '../images/photo/o8-742879.jpg'
import P790991 from '../images/photo/o8-790991.jpg'
import P793963 from '../images/photo/o8-793963.jpg'
import P852814 from '../images/photo/o8-852814.jpg'
import P856793 from '../images/photo/o8-856793.jpg'
import P938179 from '../images/photo/o8-938179.jpg'
import P968551 from '../images/photo/o8-968551.jpg'

import BANGGIACENTURYCITY06144945 from '../images/chinh-sach/06144945-bang-gia-century-city.jpeg'
import GIASHOPHOUSECENTURYCITY25214402 from '../images/chinh-sach/25214402-gia-shophouse-century-city.jpg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobeAfrica, faTemperatureLow, faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { faHome, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faTree } from '@fortawesome/free-solid-svg-icons'
import { faIndustry } from '@fortawesome/free-solid-svg-icons'
import { faCommentSlash } from '@fortawesome/free-solid-svg-icons'
import { faRoad } from '@fortawesome/free-solid-svg-icons'
import { faLink } from '@fortawesome/free-solid-svg-icons'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import { URL_API } from '../constants/API'
import { Image, notification } from 'antd'

function LandingPage() {
    const [isHidden, setIsHidden] = useState(false)
    const [isMenu, setIsmenu] = useState(false)
    const [isItemShow1, setIsItemShow1] = useState(false)
    const [isItemShow2, setIsItemShow2] = useState(false)
    const [isItemShow3, setIsItemShow3] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', function (event) {
            const stickDestination = document.getElementById('stick-flag-action')
            const iconRoll = document.getElementById('toansida')

            if (this.scrollY > 100) {
                stickDestination.classList.add('stuck')
                iconRoll.style.display = ""
            } else {
                stickDestination.classList.remove('stuck')
                iconRoll.style.display = "none"
            }
            if (this.scrollY > 200) {

            }
        })

        setTimeout(() => {
            openModal()
        }, 15000)
    }, [])

    const [data, setData] = useState({
        fullname: '',
        phone: '',
        message: '',
        date: new Date(),
    })

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (!data.fullname || !data.phone) {
            notification.warning({
                placement: 'topRight',
                message: 'C???nh b??o',
                description: 'Kh??ng th??nh c??ng.Vui l??ng th??? l???i!',
            })
            return
        }

        try {
            const response = await fetch(URL_API, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify([[data.fullname, data.phone, data.message, data.date.toLocaleString()]]),
            })

            const res = await response.json()

            setData({ ...data, fullname: '', phone: '', message: '', date: new Date() })

            notification.success({
                placement: 'topRight',
                message: 'Th??ng b??o',
                description: '????ng k?? th??nh c??ng!',
            })
        } catch (error) {
            notification.error({
                placement: 'topRight',
                message: 'L???i',
                description: 'H??? th???ng x???y ra l???i!Vui l??ng th??? l???i!',
            })
        }
    }

    const openModal = () => {
        setIsHidden(true)
    }

    const closeModal = () => {
        setIsHidden(false)
    }

    return (
        <body
            style={{ overflow: 'hidden' }}
            className='
            home
            page-template page-template-page-blank page-template-page-blank-php page page-id-9
            ot-vertical-menu
            lightbox
            lazy-icons
            nav-dropdown-has-arrow
        '>
            <a className='skip-link screen-reader-text' href='#main'>
                Skip to content
            </a>
            <div
                id='wrapper'
                style={isMenu ? { height: '100vh', overflowY: 'hidden', opacity: 0.5 } : {}}
                onClick={() => {
                    // setIsmenu(false)
                }}>
                <header id='header' className='header has-sticky sticky-jump' id='stick-flag-action'>
                    <div className='header-wrapper' id='header-sticky-id'>
                        <div id='masthead' className='header-main show-logo-center nav-dark'>
                            <div className='header-inner flex-row container logo-center' role='navigation'>
                                <div id='logo' className='flex-col logo'>
                                    <a href='/' title='Century City' rel='home'>
                                        <img width={123} height={100} src={LOGO} className='header-logo-dark' alt='Century City' />
                                    </a>
                                </div>
                                <div
                                    className='flex-col show-for-medium flex-left'
                                    onClick={() => {
                                        setIsmenu(true)
                                    }}>
                                    <ul className='mobile-nav nav nav-left'>
                                        <li className='nav-icon has-icon'>
                                            <div className='header-button'>
                                                <a
                                                    style={{
                                                        alignSelf: 'center',
                                                        display: 'flex',
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        borderColor: '#eecc79',
                                                    }}
                                                    // href='#'
                                                    data-open='#main-menu'
                                                    data-pos='left'
                                                    data-bg='main-menu-overlay'
                                                    data-color='dark'
                                                    className='icon button round is-outline is-small'
                                                    aria-controls='main-menu'
                                                    aria-expanded='false'>
                                                    <FontAwesomeIcon icon={faBars} size='40' />
                                                </a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex-col hide-for-medium flex-left'>
                                    <ul className='header-nav header-nav-main nav nav-left nav-uppercase' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <li className='menu-item'>
                                            <a href='#gioithieu' className='nav-top-link'>
                                                Gi???i thi???u
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#vitri' className='nav-top-link'>
                                                V??? tr??
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#tienich' className='nav-top-link'>
                                                Ti???n ??ch
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#sanpham' className='nav-top-link'>
                                                S???n ph???m
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex-col hide-for-medium flex-right'>
                                    <ul className='header-nav header-nav-main nav nav-right nav-uppercase' style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <li className='menu-item'>
                                            <a href='#matbang' className='nav-top-link'>
                                                M???t b???ng
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#tiendo' className='nav-top-link'>
                                                Ti???n ?????
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#banggia' className='nav-top-link'>
                                                B???ng gi??
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#lhmh' className='nav-top-link'>
                                                Li??n h???
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex-col show-for-medium flex-right'>
                                    <ul className='mobile-nav nav nav-right' />
                                </div>
                            </div>
                        </div>
                        <div className='header-bg-container fill'>
                            <div className='header-bg-image fill' />
                            <div className='header-bg-color fill' />
                        </div>
                    </div>
                </header>

                <main id='main' className>
                    <div id='content' role='main' className='content-area'>
                        <div className='slide'>
                            <picture>
                                <source media='(max-width: 760px)' srcSet={BANNERSM8} />
                                <img src={BANNER8} style={{ width: '100%' }} />
                            </picture>
                            <span className='scroll-to' data-label='Scroll to: #gioithieu' data-bullet='false' data-link='#gioithieu' data-title='Gi???i thi???u'>
                                <a name='gioithieu' />
                            </span>
                            <section className='section-description'>
                                <p>
                                    <strong>
                                        Ch??o m???ng Qu?? kh??ch&nbsp;?????n Website ch??nh th???c ph??n ph???i d??? ??n Century City c???a Kim Oanh Group. D?????i ????y l?? T???t T???n T???t
                                        th??ng tin m???i v??? TI???N ????? thi c??ng, GI?? B??N v?? CH??NH S??CH ??U ????I th??ng 6/2021.
                                    </strong>
                                </p>
                                <p>
                                    <span style={{ color: '#e67e22' }}>
                                        <b>[VIDEO] Ti???n ????? x??y d???ng d??? ??n Cenyury City (Th??ng 6/2021)</b>
                                    </span>
                                </p>
                                <div data-oembed-url='https://youtu.be/2pzpT_FYF4c'>
                                    <div style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%' }}>
                                        <iframe
                                            allow='encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture'
                                            allowFullScreen
                                            scrolling='no'
                                            src='https://www.youtube.com/embed/2pzpT_FYF4c?rel=0'
                                            style={{ border: 0, top: 0, left: 0, width: '100%', height: '100%', position: 'absolute' }}
                                        />
                                    </div>
                                </div>
                                <h3 style={{ textAlign: 'center' }}>
                                    <span style={{ color: '#e67e22' }}>
                                        <b>????? TI???T KI???M TH???I GIAN T??M HI???U D??? ??N CENTURY CITY</b>
                                    </span>
                                </h3>
                                <blockquote>
                                    <p>
                                        Qu?? kh??ch vui l??ng ??i???n th??ng tin b??n d?????i ????? nh???n t?? v???n, ??u ti??n ch???n v??? tr?? ?????p v?? c??n ph?? h???p, Ho???c li??n h???{' '}
                                        <span style={{ fontSize: '20px' }}>
                                            <strong>
                                                <u>
                                                    <a href='tel:0907 839 986'>
                                                        <span style={{ color: '#e67e22' }}>0907 839 986</span>
                                                    </a>
                                                </u>
                                            </strong>
                                        </span>
                                        &nbsp;????? nh???n t?? v???n tr???c ti???p.<strong>&nbsp;</strong>
                                    </p>
                                </blockquote>
                            </section>
                        </div>
                        <section className='section dangkytop' id='section_84277082'>
                            <div className='section-content relative'>
                                <div className='wpcf7' id='wpcf7-f592-o2' lang='vi' dir='ltr' style={{ padding: '0 15px' }}>
                                    <div className='screen-reader-response' />
                                    <div style={{ display: 'flex' }} className='wpcf7-form form-send'>
                                        <div className='row formdangky'>
                                            <div className='col'>
                                                <div className='col-inner'>
                                                    <span className='wpcf7-form-control-wrap text-324'>
                                                        <input
                                                            type='text'
                                                            name='fullname'
                                                            size={40}
                                                            className='wpcf7-form-control wpcf7-text'
                                                            aria-invalid='false'
                                                            placeholder='H??? t??n'
                                                            onChange={handleChange}
                                                            value={data.fullname}
                                                        />
                                                    </span>
                                                </div>
                                                <p />
                                            </div>
                                            <div className='col'>
                                                <div className='col-inner'>
                                                    <span className='wpcf7-form-control-wrap tel-244'>
                                                        <input
                                                            type='tel'
                                                            name='phone'
                                                            size={40}
                                                            className='wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel'
                                                            aria-invalid='false'
                                                            placeholder='S??? ??i???n tho???i'
                                                            onChange={handleChange}
                                                            value={data.phone}
                                                        />
                                                    </span>
                                                </div>
                                                <p />
                                            </div>
                                            <div className='col'>
                                                <div className='col-inner'>
                                                    <span className='wpcf7-form-control-wrap email-69'>
                                                        <input
                                                            type='text'
                                                            name='message'
                                                            size={255}
                                                            className='wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email'
                                                            aria-invalid='false'
                                                            placeholder='Ghi ch??...'
                                                            onChange={handleChange}
                                                            value={data.message}
                                                        />
                                                    </span>
                                                </div>
                                                <p />
                                            </div>
                                            <div className='col colbtn'>
                                                <div className='col-inner'>
                                                    <button className='wpcf7-form-control wpcf7-submit' onClick={handleSubmit}>
                                                        ????ng k??
                                                    </button>
                                                </div>
                                                <p />
                                            </div>
                                        </div>
                                        <div className='clear' />
                                        <div className='form-alert' style={{ display: 'none' }} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='section lydo' id='intro'>
                            <div className='section-content relative'>
                                <h2 className='title' style={{ textAlign: 'center', padding: '30px 0' }}>
                                    <span className='bg-white'>CENTURY CITY: T??M ??I???M K???T N???I ?????U T??</span>
                                </h2>
                                <div className='row row-fluid'>
                                    <div className='col large-6 medium-12 small-12'>
                                        <div className='content-box'>
                                            <div className='res-w7 medium-12 small-12 large-12'>
                                                <div className='col-inner'>
                                                    <p>
                                                        <span style={{ color: '#e67e22' }}>
                                                            <strong>C?? H???I CU???I C??NG S??? H???U PH??N KHU ?????P NH???T V???I GI?? T???T NH???T&nbsp;</strong>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <i>???</i> S??? ????? t???ng n???n ??? Thanh to??n ngay, s??? h???u li???n tay, Gi?? ch???
                                                        <span className='hotlinec'>16.8&nbsp;tri???u/m??</span>, OCB&nbsp;h??? tr??? vay
                                                        <span className='hotlinec'>70%</span> gi?? tr???, Qu?? t???ng l??n ?????n 20 ch??? v??ng
                                                    </p>
                                                    <p>
                                                        <i>???&nbsp;</i>C?? h???i tham gia ch????ng tr??nh khuy???n m??i ???C??NG KIM OANH K???T N???I ?????U T????? v???i t???ng gi?? tr??? 20
                                                        t???
                                                    </p>
                                                    <p>
                                                        <i>??????</i>Li??n h??? ngay:
                                                        <span style={{ fontSize: '20px' }}>
                                                            <strong>
                                                                <u>
                                                                    <a href='tel:0907 839 986'>
                                                                        <span style={{ color: '#e67e22' }}>0907 839 986</span>
                                                                    </a>
                                                                </u>
                                                            </strong>
                                                        </span>
                                                        &nbsp;(Ph??ng kinh doanh Ch??? ?????u T??).&nbsp;H??? tr??? mi???n ph?? xe ????a ????n qu?? kh??ch tham quan d??? ??n 24/7.
                                                    </p>
                                                    <a
                                                        className='button primary bounceInUp eds-on-scroll btn-animate popup'
                                                        href='#'
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            openModal()
                                                        }}>
                                                        <span>????NG K?? NGAY</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col large-6 medium-12 small-12 hide-sm'>
                                        <img src={BANNERSM8} style={{ width: '100%' }} />
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='bang-gia' id='banggia'>
                            <div className='container'>
                                <h2 style={{ textAlign: 'center' }}>B???NG GI?? M???I NH???T</h2>
                                <p style={{ textAlign: 'center' }}>
                                    T???i ngay b???ng gi?? m???i nh???t 6/2021 c???a&nbsp;200 l?? ?????p nh???t d??? ??n Century City t???i Long Th??nh. B???ng gi?? b??n ch??nh th???c t??? Kim
                                    Oanh Group.
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <img alt='' height={536} src={BANGGIACENTURYCITY06144945} width={817} />
                                </p>
                                <p
                                    style={{ textAlign: 'center' }}
                                    onClick={(e) => {
                                        e.preventDefault()
                                        openModal()
                                    }}>
                                    <a className='button primary eds-on-scroll btn-animate eds-scroll-visible bounceInUp popup' href='#'>
                                        <span>T???I B???NG GI?? ?????Y ?????</span>
                                    </a>
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <i>??????</i>Li??n h??? ngay:
                                    <span style={{ fontSize: '20px' }}>
                                        <strong>
                                            <u>
                                                <a href='tel:0907 839 986'>
                                                    <span style={{ color: '#e67e22' }}>0907 839 986</span>
                                                </a>
                                            </u>
                                        </strong>
                                    </span>
                                    &nbsp;(Ph??ng kinh doanh Ch??? ?????u T??)
                                </p>
                                <h3 style={{ textAlign: 'center' }}>
                                    <span style={{ color: '#e67e22' }}>
                                        <strong>Gi?? m???t s??? c??n Shophouse ?????p, KH??CH VIP ch???n ngay</strong>
                                    </span>
                                </h3>
                                <table border={1} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>M?? L??</strong>
                                            </td>
                                            <td>
                                                <strong>LO???I S???N PH???M</strong>
                                            </td>
                                            <td>
                                                <strong>DI???N T??CH</strong>
                                            </td>
                                            <td>
                                                <strong>Gi?? nh?? v?? ?????t g???m VAT</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>L?? A1 ??47</strong>
                                            </td>
                                            <td>NH?? X??Y S???N</td>
                                            <td>118.9m2</td>
                                            <td>&nbsp;7,704,476,000&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>L?? A1 ??48</strong>
                                            </td>
                                            <td>NH?? X??Y S???N</td>
                                            <td>118.8m2</td>
                                            <td>&nbsp;6,399,940,000&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>L?? A9 ??4</strong>
                                            </td>
                                            <td>NH?? X??Y S???N</td>
                                            <td>100m2</td>
                                            <td>&nbsp;4,331,368,000&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{ textAlign: 'center' }}>
                                    <figure className='image' style={{ display: 'inline-block' }}>
                                        <img
                                            alt='Tham kh???o gi?? m???t s??? Shophouse x??y s???n t???i Long Th??nh'
                                            height={646}
                                            src={GIASHOPHOUSECENTURYCITY25214402}
                                            width={1280}
                                        />
                                        <figcaption>Tham kh???o gi?? m???t s??? Shophouse x??y s???n t???i Long Th??nh</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </section>
                        <section style={{ margin: '20px 0' }}>
                            <div>
                                <h2 style={{ textAlign: 'center', padding: '30px 0' }}>
                                    <span className='bg-white'>VIDEO GI???I THI???U</span>
                                </h2>
                                <div className='header-hero-image video-style2 text-center'>
                                    <div data-oembed-url='https://www.youtube.com/watch?v=eHeq_5-37FM' className='box__youtube'>
                                        <div style={{ left: 0, width: '100%', height: 0, position: 'relative', paddingBottom: '56.25%' }}>
                                            <iframe
                                                id='ytplayer'
                                                type='text/html'
                                                style={{ border: 0, top: 0, left: 0, width: '100%', height: '100%', position: 'absolute' }}
                                                allowFullScreen
                                                scrolling='no'
                                                allow='encrypted-media; accelerometer; gyroscope; picture-in-picture'
                                                src='https://www.youtube.com/embed/eHeq_5-37FM?rel=0&autoplay=1&loop=1&controls=0&modestbranding=0&mute=1'
                                                frameBorder={0}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='section wh lydo bd1' id='section_1055252608'>
                            <div className='section-content relative'>
                                <h2 className='title eds-on-scroll' style={{ textAlign: 'center' }}>
                                    <span className='gradient-text'>L?? do n??n ?????u t?? v??o b???t ?????ng s???n Long Th??nh</span>
                                </h2>
                                <div className='row row-fluid' id='row-601377024' style={{ marginTop: '3em' }}>
                                    <div className='col res-w7 bounceInLeft eds-on-scroll medium-6 small-12 large-6'>
                                        <div className='col-inner'>
                                            <div className='icon'>
                                                <div className='num'>1</div>
                                                <div className='mota-icon'>
                                                    <p>Li???n k??? TP.Bi??n H??a, TPHCM v?? ngay t??m ??i???m c???a v??ng kinh t??? tr???ng ??i???m ph??a Nam</p>
                                                </div>
                                            </div>
                                            <div className='icon'>
                                                <div className='num'>2</div>
                                                <div className='mota-icon'>
                                                    <p>
                                                        L?? ?????u m???i giao th??ng khu v???c ph??a Nam v???i 5 tuy???n cao t???c; 3 tuy???n ???????ng s???t, metro; h??? th???ng c???ng bi???n
                                                        qu???c t???; 4 tuy???n qu???c l??? v?? s??n bay qu???c t??? Long Th??nh quy m?? t???m c??? khu v???c ????ng Nam ??.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='icon'>
                                                <div className='num'>3</div>
                                                <div className='mota-icon'>
                                                    <p>
                                                        N???m ngay l??i trung t??m ???th??nh ph??? s??n bay??? v?? l?? trung t??m gi??o d???c, ????o t???o ngu???n nh??n l???c v?? ph??t
                                                        tri???n k??? thu???t cao c???a ?????ng Nai
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col res-w7 bounceInRight eds-on-scroll medium-6 small-12 large-6'>
                                        <div className='col-inner'>
                                            <div className='icon'>
                                                <div className='num'>4</div>
                                                <div className='mota-icon'>
                                                    <p>S??? h???u 5 khu c??ng nghi???p l???n v?? thu???c Top ?????u c??c ?????a ph????ng thu h??t v???n ?????u t?? c???a ?????ng Nai.</p>
                                                </div>
                                            </div>
                                            <div className='icon'>
                                                <div className='num'>5</div>
                                                <div className='mota-icon'>
                                                    <p>
                                                        Qu??? ?????t ph??t tri???n d??? ??n c???a TP. Bi??n H??a ng??y c??ng khan hi???m, ?????ng Nai m??? r???ng kh??ng gian ???? th??? v???
                                                        ph??a ????ng Nam g???n v???i s??n bay Long Th??nh
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='icon'>
                                                <div className='num'>6</div>
                                                <div className='mota-icon'>
                                                    <p>
                                                        M???t b???ng b???t ?????ng s???n Long Th??nh th???p h??n nhi???u so v???i TP.Bi??n H??a, qu???n 9 (TPHCM) nh??ng ti???m n??ng t??ng
                                                        gi?? kh??ng thua k??m.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #tongquan' data-bullet='false' data-link='#tongquan' data-title='Gi???i thi???y'>
                            <a name='tongquan' />
                        </span>
                        <section className='section pd-ss bd1' id='section_560233019'>
                            <div className='bg section-bg fill bg-fill bg-loaded' />
                            <div className='section-content relative'>
                                <div className='section_header'>
                                    <h2 className='title eds-on-scroll' style={{ textAlign: 'center' }}>
                                        <span className='bg-white'>T???NG QUAN D??? ??N CENTURY CITY</span>
                                    </h2>
                                    <div className='description'>
                                        <p>
                                            Khu ???? th???&nbsp;<strong>Century City</strong>&nbsp;c?? quy m?? l??n ?????n 49,8 ha t???a l???c ngay s??n bay t??? ???? Long Th??nh,
                                            c???ng trung chuy???n qu???c t??? t???m c??? khu v???c ch??u ??, v???i c??ng su???t 100 tri???u l?????t kh??ch v?? 5 tri???u t???n h??ng h??a m???i n??m,
                                            h???a h???n tr??? th??nh m???t khu ???? th??? th????ng m???i ??? d???ch v??? ?????ng c???p v?? g??p ph???n v??o b?????c chuy???n m??nh m???nh m??? c???a Long
                                            Th??nh, tr??n ch???ng ???????ng ph??t tri???n th??nh&nbsp;<strong>???th??nh ph??? s??n bay</strong>??? t???m c??? qu???c t???.
                                        </p>
                                    </div>
                                </div>
                                <div className='row row-fluid align-middle align-center' id='row-429826978'>
                                    <div className='col left-0 pd15 res-w medium-5 small-12 large-5'>
                                        <div className='col-inner'>
                                            <div className='item-diathe fadeInLeft eds-on-scroll'>
                                                <fieldset className='fadeInRight eds-on-scroll text_tongquan'>
                                                    <legend>
                                                        <span style={{ fontSize: '18px' }}>TH??NG TIN T???NG QUAN</span>
                                                    </legend>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> T??n d??? ??n: </strong> Century City
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> T??n quy ho???ch: </strong> Khu d??n c?? B??nh S??n
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> V??? tr??: </strong> ???????ng ??T 769 v?? ???????ng C???u M??n; huy???n Long Th??nh, t???nh ?????ng Nai
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Qui m??:</strong> 49,8 ha g???m 2.150 s???n ph???m nh?? ph???, bi???t th???, shophouse
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Ch??? ?????u t??:</strong> C??ng ty CP ?????u t?? v?? ph??t tri???n Thu???n L???i
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Ph??t tri???n v?? ph??n ph???i:</strong> Kim Oanh Group
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Ti???n ??ch n???i khu:</strong> C??ng vi??n c???nh quan 2 ha; qu???ng tr?????ng 12 cung ho??ng ?????o,
                                                        3 c??ng vi??n ti???u khu; tr?????ng h???c t??? m???m non ?????n THCS; Trung t??m Th????ng m???i ??? H???i ngh??? Century Palace
                                                        1,2ha, h??? b??i???
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}>Ti???n ??ch li??n k???t: </strong> TTHC Long Th??nh; ch??? B??nh S??n, ch??? Long Th??nh; Vincom
                                                        Plaza; khu du l???ch sinh th??i Th??c Giang ??i???n, s??n golf Long Th??nh???
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}>H??? t???ng:</strong> Cu???i qu?? 3 ??? 2020, Giao n???n qu?? 4/2020, Giao nh?? qu?? 1/2021
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}>Ngu???n g???c qu??? ?????t:</strong> Th??ng qua ?????u gi?? v??o th??ng 7/2019 v???i m???c gi?? 1.270 t???
                                                        ?????ng
                                                    </p>
                                                </fieldset>
                                            </div>
                                            {/* {'{'}/*{' '} */}
                                            {/* <a className='button primary is-outline form-bat  bounceInUp  eds-on-scroll' style={{ borderRadius: '10px' }}>
                                                <span>????NG K?? NGAY</span>
                                            </a>{' '} */}
                                        </div>
                                    </div>
                                    <div className='col res-w medium-7 small-12 large-7'>
                                        <div className='col-inner'>
                                            <div className='img has-hover eds-on-scroll x md-x lg-x y md-y lg-y' id='image_99537942'>
                                                <div className='img-inner image-cover dark' style={{ paddingTop: '72%' }}>
                                                    <img width={1920} height={1080} src={TONGQUAN} className='attachment-original size-original' alt='' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='section nhungconso wh bd1' id='section_471198343'>
                            <div className='bg section-bg fill bg-fill bg-loaded' />
                            <div className='section-content relative'>
                                <div className='row' id='row-1871280433'>
                                    <div className='col eds-on-scroll small-12 large-12'>
                                        <div className='col-inner text-center'>
                                            <h2 className='title' style={{ textAlign: 'center' }}>
                                                <span className='bg-white'>Century City v?? nh???ng con s???</span>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className='col bounceInUp eds-on-scroll small-12 large-12'>
                                        <div className='col-inner'>
                                            <div className='col__icon'>
                                                {/* <i className='fa fa-globe' /> */}
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faGlobeAfrica} />
                                                <div className='col__icon_t1'>49,8 ha</div>
                                                <div className='col__icon_t2'>Quy m?? d??? ??n</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faHome} />
                                                <div className='col__icon_t1'>2.150</div>
                                                <div className='col__icon_t2'>S???n ph???m</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faTree} />

                                                <div className='col__icon_t1'>30.000 m??</div>
                                                <div className='col__icon_t2'>M???ng xanh</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faIndustry} />

                                                <div className='col__icon_t1'>12.450 m??</div>
                                                <div className='col__icon_t2'>Trung t??m th????ng m???i</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faIndustry} />
                                                <div className='col__icon_t1'>27.390 m??</div>
                                                <div className='col__icon_t2'>Tr?????ng h???c</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faRoad} />
                                                <div className='col__icon_t1'>600 m</div>
                                                <div className='col__icon_t2'>M???t ti???n ???????ng ch??nh</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faLink} />
                                                <div className='col__icon_t1'>50+</div>
                                                <div className='col__icon_t2'>Ti???n ??ch n???i khu</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faComment} />
                                                <div className='col__icon_t1'>50%</div>
                                                <div className='col__icon_t2'>M???t ????? x??y d???ng</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #nganhnghe' data-bullet='false' data-link='#nganhnghe' data-title='Ng??nh ngh???'>
                            <a name='nganhnghe' />
                        </span>
                        <section className='section duoi-mb pd-ss wh bd1' id='tong-quan-02' hidden>
                            <div className='section-content relative'>
                                <div className='row row-fluid' id='row-1527641100'>
                                    <div className='col res-w left-0 bounceInUp eds-on-scroll medium-5 small-12 large-5' style={{ margin: 'auto' }}>
                                        <div className='col-inner'>
                                            <div className='item-diathe fadeInLeft eds-on-scroll'>
                                                <h2 className='title eds-on-scroll' style={{ textAlign: 'center' }}>
                                                    <span>Trung t??m th??nh ph??? s??n bay</span>
                                                </h2>
                                                <p style={{ fontSize: '15px', lineHeight: '26px' }}>
                                                    ??? Khu ???? th??? Century City n???m trong quy ho???ch thu???c khu quy ho???ch h???u c???n ??? logistic c???a s??n bay, k??? v???ng
                                                    tr??? th??nh khu ???? th??? th????ng m???i ??? d???ch v???, ph???c v??? nhu c???u giao th????ng ??a d???ng c???a c??c doanh nh??n trong v??
                                                    ngo??i n?????c.
                                                </p>
                                                <p style={{ fontSize: '15px', lineHeight: '26px' }}>
                                                    ??? ????y l?? d??? ??n "ti??n phong" ????n ?????u s??n bay qu???c t??? Long Th??nh, v?? v???y khu ???? th??? Century City c??n ???????c t??ch
                                                    h???p chu???i ti???n ??ch n???i khu ?????ng c???p v?? h??? th???ng ti???n ??ch li??n k???t x???ng t???m ph???c v??? nhu c???u tr???i nghi???m cu???c
                                                    s???ng.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col res-w bounceInDown eds-on-scroll medium-7 small-12 large-7'>
                                        <div className='col-inner'>
                                            <div className='img has-hover x md-x lg-x y md-y lg-y' id='image_1741122167'>
                                                <div className='img-inner image-cover dark' style={{ paddingTop: '511px' }}>
                                                    <img
                                                        width={1020}
                                                        height="576"
                                                        src={TONGQUAN1}
                                                        className='attachment-large size-large'
                                                        alt=''
                                                        sizes='(max-width: 1020px) 100vw, 1020px'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className="section duoi-mb pd-ss wh bd1" id="tong-quan-02" hidden="">

                            <div className="section-content relative">
                                <div className="row row-fluid" id="row-1527641100">
                                    <div className="col res-w left-0  eds-on-scroll medium-5 small-12 large-5 eds-scroll-visible bounceInUp">
                                        <div className="col-inner">
                                            <div className="item-diathe   eds-on-scroll eds-scroll-visible fadeInLeft">
                                                <h2 className="title  eds-on-scroll  eds-scroll-visible" style={{textAlign: 'center'}}><span>Trung t??m th??nh ph??? s??n bay</span></h2>
                                                <p style={{fontSize: '15px', lineHeight: '26px'}}>
                                                    ??? Khu ???? th??? Century City n???m trong quy ho???ch thu???c khu quy ho???ch h???u c???n ??? logistic c???a s??n bay, k??? v???ng tr??? th??nh khu ???? th??? th????ng m???i ??? d???ch v???, ph???c v??? nhu c???u giao th????ng ??a d???ng c???a c??c doanh nh??n trong v?? ngo??i n?????c.
                                    </p>
                                                <p style={{fontSize: '15px', lineHeight: '26px'}}>
                                                    ??? ????y l?? d??? ??n "ti??n phong" ????n ?????u s??n bay qu???c t??? Long Th??nh, v?? v???y khu ???? th??? Century City c??n ???????c t??ch h???p chu???i ti???n ??ch n???i khu ?????ng c???p v?? h??? th???ng ti???n ??ch li??n k???t x???ng t???m ph???c v??? nhu c???u tr???i nghi???m cu???c s???ng.
                                    </p>

                                            </div>
                                        </div>

                                    </div>
                                    <div className="col res-w  eds-on-scroll medium-7 small-12 large-7 eds-scroll-visible bounceInDown">
                                        <div className="col-inner">
                                            <div className="img has-hover x md-x lg-x y md-y lg-y height-customize" id="image_1741122167">
                                                <div className="img-inner image-cover dark" style={{paddingtop:'511px'}}>
                                                    <img width="1020" height="574" src={TONGQUAN1} className=" attachment-large size-large height-customize" alt="" sizes="(max-width: 1020px) 100vw, 1020px" />
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </section>

                        <span className='scroll-to' data-label='Scroll to: #vitri' data-bullet='false' data-link='#vitri' data-title='V??? tr??'>
                            <a name='vitri' />
                        </span>
                        <section className='section vitrinew pd-ss wh bd1 dark' id='vi-tri'>
                            <div className='bg section-bg fill bg-fill bg-loaded' />
                            <div className='section-content relative'>
                                <div className='row row-full-width' id='row-719012083'>
                                    <div className='col res-w left-0 cust-con bounceInDown eds-on-scroll uration6 eds-on-scroll small-12 large-12'>
                                        <div className='col-inner'>
                                            <h2 className='title' style={{ textAlign: 'center' }}>
                                                <span>V??? TR?? CHI???N L?????C TR??N ?????I L??? TH????NG M???I</span>
                                            </h2>
                                            <div className='item-diathe'>
                                                <div className='copy' style={{ textAlign: 'justify' }}>
                                                    <div className='item-diathe'>
                                                        <p style={{ textAlign: 'center' }}>
                                                            Khu ???? th???
                                                            <span style={{ color: '#e67e22' }}>
                                                                <em>
                                                                    <strong> Century City</strong>
                                                                </em>
                                                            </span>
                                                            &nbsp;n???m tr??n hai m???t ti???n ???????ng huy???t m???ch c???a huy???n Long Th??nh, to??? l???c ngay ??T 769 v?? ???????ng C???u
                                                            M??n thu???c x?? B??nh S??n, k???t n???i tr???c ti???p b???n tuy???n giao th??ng tr???ng ??i???m g???m ???????ng V??nh ??ai 4, ???????ng
                                                            ??T 769 m???i, qu???c l??? 51, cao t???c TPHCM ??? Long Th??nh ??? D???u Gi??y.
                                                        </p>
                                                        <p style={{ textAlign: 'center' }}>
                                                            ??i???m nh???n to??? ????? v??ng ???????c c??c nh?? ?????u t?? ????nh gi?? cao, li???n k??? khu t??i ?????nh c?? L???c An - B??nh S??n
                                                            200ha, v?? khu c??ng nghi???p L???c An - B??nh S??n g???n 500ha hi???n ???? l???p ?????y 100%.
                                                        </p>
                                                        <p style={{ textAlign: 'center' }}>
                                                            Ngo??i ra, d??? ??n c??n k???t n???i tr???c ti???p v???i
                                                            <strong>
                                                                <span style={{ color: '#e67e22' }}>?????i l??? B???c S??n ??? Long Th??nh</span>
                                                            </strong>{' '}
                                                            v?? thu???n ti???n ?????n{' '}
                                                            <em>
                                                                <strong>s??n bay qu???c t??? Long Th??nh</strong>
                                                            </em>
                                                            . ????y l?? tuy???n ???????ng th????ng m???i k???t h???p d???ch v??? cao c???p v?? c??ng l?? m???t bi???u t?????ng h??ng th???nh c???a
                                                            ???th??nh ph??? s??n bay???.
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col res-w bounceInUp eds-on-scroll small-12 large-12'>
                                        <div className='col-inner text-center'>
                                            <div className='location'>
                                                <div className='section-image text-center'>
                                                    <img src={VITRI} alt='V??? tr?? d??? ??n Century City Long Th??nh' className='img-fluid' />
                                                    <svg
                                                        version='1.1'
                                                        id='Layer_1'
                                                        xmlns='http://www.w3.org/2000/svg'
                                                        xmlnsXlink='http://www.w3.org/1999/xlink'
                                                        x='0px'
                                                        y='0px'
                                                        viewBox='0 0 1219.4 981.2'
                                                        style={{ enableBackground: 'new 0 0 1219.4 981.2' }}
                                                        xmlSpace='preserve'>
                                                        <line className='st0 animation' x1='737.4' y1='336.8' x2='542.7' y2='171.7' />
                                                        <path
                                                            className='st1 animation'
                                                            d='M706.8,356.3c0,0,158-2.8,176.1-2.8c24.8,0,37.8,10.1,46.2,22.8c12,18,26.2,40.2,36,53.2
                            c10.1,14.6,30.7,15,53.7,0.7'
                                                        />
                                                        <line className='st1 animation' x1='487.4' y1='496.6' x2={855} y2='262.9' />
                                                        <path
                                                            className='st1 animation'
                                                            d='M50.3,764c25.5-2.6,297.5-44.9,367.2-56.6c12.5-2.1,26.2-14.7,28-27.7c10.4-77.3,21.1-146.9,22.7-158.1
                            c3.4-22.8,20.3-30.4,48.4-26.1c71,11,231.7,41,243.5,42.2c15.1,1.6,19-1.6,23-18.2s57.4-217.5,62.5-238.6s22.5-29.2,46.9-40.5
                            c36.3-16.9,82.8-39.3,112.7-54c15.7-7.7,26.7-16,26.7-29.6V82.8'
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <style dangerouslySetInnerHTML={{ __html: '' }} />
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #tienich' data-bullet='false' data-link='#tienich' data-title='ti???n ??ch'>
                            <a name='tienich' />
                        </span>
                        <section className='section duoi-mb tanhuong tienich pt-30' id='section_1320126025'>
                            <div className='section-content relative'>
                                <div className='row row-full-width' id='row-369596245'>
                                    <div className='col cust-con bounceInDown eds-on-scroll small-12 large-12'>
                                        <div className='col-inner'>
                                            <div className='section_header'>
                                                <h2 className='title' style={{ textAlign: 'center' }}>
                                                    <span className='bg-white'>Th??nh ph??? ??a ti???n ??ch</span>
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='row row-full-width'>
                                    <div className='col res-w5 bounceInDown eds-on-scroll medium-6 small-6 large-3'>
                                        <div className='box has-hover has-hover box-text-bottom'>
                                            <div className='box-image'>
                                                <div className='image-zoom-long image-cover' style={{ paddingTop: '77%' }}>
                                                    <img
                                                        width={1920}
                                                        height={1075}
                                                        src={CONGVIEN}
                                                        data-src={CONGVIEN}
                                                        className='lazy attachment-original size-original'
                                                        alt=''
                                                        sizes='(max-width: 1920px) 100vw, 1920px'
                                                    />
                                                </div>
                                            </div>
                                            <div className='box-text text-center'>
                                                <div className='box-text-inner'>
                                                    <p>C??ng vi??n Century Park 2ha</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col res-w5 bounceInDown eds-on-scroll medium-6 small-6 large-3'>
                                        <div className='box has-hover has-hover box-text-bottom'>
                                            <div className='box-image'>
                                                <div className='image-zoom-long image-cover' style={{ paddingTop: '77%' }}>
                                                    <img
                                                        width={1920}
                                                        height={1080}
                                                        src={TRUONGHOC}
                                                        data-src={TRUONGHOC}
                                                        className='lazy attachment-original size-original'
                                                        alt=''
                                                        sizes='(max-width: 1920px) 100vw, 1920px'
                                                    />
                                                </div>
                                            </div>
                                            <div className='box-text text-center'>
                                                <div className='box-text-inner'>
                                                    <p>Tr?????ng h???c t??? m???m non ?????n THCS</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col res-w5 bounceInDown eds-on-scroll medium-6 small-6 large-3'>
                                        <div className='box has-hover has-hover box-text-bottom'>
                                            <div className='box-image'>
                                                <div className='image-zoom-long image-cover' style={{ paddingTop: '77%' }}>
                                                    <img
                                                        width={1920}
                                                        height={942}
                                                        src={TTTM}
                                                        data-src={TTTM}
                                                        className='lazy attachment-original size-original'
                                                        alt=''
                                                        sizes='(max-width: 1920px) 100vw, 1920px'
                                                    />
                                                </div>
                                            </div>
                                            <div className='box-text text-center'>
                                                <div className='box-text-inner'>
                                                    <p>Trung t??m th????ng m???i ??? h???i ngh???</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col res-w5 bounceInDown eds-on-scroll medium-6 small-6 large-3'>
                                        <div className='box has-hover has-hover box-text-bottom'>
                                            <div className='box-image'>
                                                <div className='image-zoom-long image-cover' style={{ paddingTop: '77%' }}>
                                                    <img
                                                        width={1920}
                                                        height={1124}
                                                        src={HOBOI}
                                                        // data-src='./images/tienich/Ho-boi.jpg'
                                                        className='lazy attachment-original size-original'
                                                        alt=''
                                                        sizes='(max-width: 1920px) 100vw, 1920px'
                                                    />
                                                </div>
                                            </div>
                                            <div className='box-text text-center'>
                                                <div className='box-text-inner'>
                                                    <p>H??? B??i</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='section matbang bd1 bounceInUp eds-on-scroll' id='section_1096411384'>
                            <div className='section-content relative'>
                                <div className='row' id='row-1705436415'>
                                    <div className='col small-12 large-12'>
                                        <div className='col-inner text-center'>
                                            <h2 className='title' style={{ textAlign: 'center' }}>
                                                <span>Ti???n ??ch li??n k???t c???a Century City</span>
                                            </h2>
                                            <div className='img has-hover #lbti x md-x lg-x y md-y lg-y' id='image_1372564388'>
                                                <div className='img-inner dark'>
                                                    <img
                                                        width={1201}
                                                        height={700}
                                                        src={TIENICHLIENKET}
                                                        className='attachment-original size-original'
                                                        alt=''
                                                        sizes='(max-width: 1201px) 100vw, 1201px'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #sanpham' data-bullet='false' data-link='#sanpham' data-title='S???n ph???m'>
                            <a name='sanpham' />
                        </span>
                        <section className='section duoi-mb pd-ss bott-0 wh' id='section_1610846969'>
                            <div className='section-content relative'>
                                <div className='row row-fluid' id='row-1280681047'>
                                    <div className='col res-w left-0 bounceInUp eds-on-scroll medium-5 small-12 large-5' style={{ margin: 'auto' }}>
                                        <div className='col-inner'>
                                            <h2 className='title' style={{ textAlign: 'center' }}>
                                                <span>PH??N KHU CENTURY CENTER</span>
                                            </h2>
                                            <div id='PARAGRAPH474' className='ladi-element'>
                                                <p>
                                                    To??? l???c 600 m??t tr??n m???t ti???n ???????ng ??T 769, bao g???m c??c d??y Shophouse 3 m???t ti???n; TTTM v?? h???i ngh??? Century
                                                    Palace 1,2ha; c??c d??y shop t???i t???ng tr???t c???a khu c??n h??? cao t???ng.
                                                </p>
                                                {/* <p>
                                                    Ph??n khu n??y ???????c b??? tr?? c??c d??y shophouse cao c???p, trung t??m th????ng m???i ??? h???i ngh??? Century Palace v?? khu
                                                    c??n h??? cao t???ng v???i c??c d??y shop ??? t???ng tr???t.{' '}
                                                </p> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col res-w bounceInDown eds-on-scroll medium-7 small-12 large-7'>
                                        <div className='col-inner'>
                                            <div className='img has-hover x md-x lg-x y md-y lg-y' id='image_1911937505'>
                                                <div className='img-inner image-cover dark' style={{ paddingTop: '50%' }}>
                                                    <img
                                                        width={1020}
                                                        height={574}
                                                        src={PHANKHUCENTURYCITY}
                                                        className='attachment-large size-large'
                                                        alt=''
                                                        sizes='(max-width: 1020px) 100vw, 1020px'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='section slider-abc pd-ss wh bd1' id='section_370235354'>
                            <div className='section-content relative'>
                                <div className='row row-fluid' id='row-221188500'>
                                    <div className='col res-w bounceInDown eds-on-scroll medium-7 small-12 large-7'>
                                        <div className='col-inner'>
                                            <div className='img has-hover x md-x lg-x y md-y lg-y' id='image_1680082884'>
                                                <div className='img-inner dark'>
                                                    <img
                                                        width={1020}
                                                        height={574}
                                                        src={PHANKHUCENTURYPARK}
                                                        className='attachment-large size-large'
                                                        alt=''
                                                        sizes='(max-width: 1020px) 100vw, 1020px'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col res-w bounceInUp eds-on-scroll medium-5 small-12 large-5' style={{ margin: 'auto' }}>
                                        <div className='col-inner'>
                                            <div id='PARAGRAPH474' className='ladi-element'>
                                                <h2 className='title' style={{ textAlign: 'center' }}>
                                                    <span>Ph??n khu Century Park</span>
                                                </h2>
                                                <p>Century Park l?? trung t??m khu ???? th??? v???i ??i???m nh???n l?? c??ng vi??n k??? quan ki???n tr??c th??? gi???i quy m?? 2ha.</p>
                                                <p>
                                                    T??i hi???n nh???ng ki???n tr??c v?? ?????i nh???t th??? gi???i nh?? ??i???n Kremli (Nga), ?????n Pantheon (??), nh?? h??t Opera Skydnye
                                                    (??c), th??p nghi??ng Pisa (??), t?????ng n??? th???n T??? do (M???)...
                                                </p>
                                                <p>Tr?? ch??i v??ng quay ng???a g???, qu???ng tr?????ng 12 cung ho??ng ?????o....</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='section duoi-mb pd-ss bott-0 wh bd1' id='section_229560683'>
                            <div className='bg section-bg fill bg-fill bg-loaded' />
                            <div className='section-content relative'>
                                <div className='row row-fluid' id='row-1519128383'>
                                    <div className='col res-w left-0 bounceInUp eds-on-scroll medium-5 small-12 large-5' style={{ margin: 'auto' }}>
                                        <div className='col-inner'>
                                            <h2 className='title' style={{ textAlign: 'center' }}>
                                                <span>PH??N KHU CENTURY GARDEN</span>
                                            </h2>
                                            <div id='PARAGRAPH474' className='ladi-element'>
                                                <p>
                                                    Century Garden l?? ??i???m k???t n???i gi???a Century City v?? khu d??n c?? B??nh S??n li???n k???. S??? h???u h??? th???ng gi??o d???c t???
                                                    m???m non ?????n THCS v?? c??ng vi??n 2.500m2, ch??? c??ch khu c??n h??? v?? h???i ngh??? Century Palace v??i b?????c ch??n.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col res-w bounceInDown eds-on-scroll medium-7 small-12 large-7'>
                                        <div className='col-inner'>
                                            <div className='img has-hover x md-x lg-x y md-y lg-y' id='image_1911937505'>
                                                <div className='img-inner image-cover dark' style={{ paddingTop: '50%' }}>
                                                    <img
                                                        width={1020}
                                                        height={574}
                                                        src={PHANKHUCENTURYGARDEN}
                                                        className='attachment-large size-large'
                                                        alt=''
                                                        sizes='(max-width: 1020px) 100vw, 1020px'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='section slider-abc pd-ss wh bd1' id='section_1402914417'>
                            <div className='section-content relative'>
                                <div className='row row-fluid' id='row-1402914417'>
                                    <div className='col res-w bounceInDown eds-on-scroll medium-7 small-12 large-7'>
                                        <div className='col-inner'>
                                            <div className='img has-hover x md-x lg-x y md-y lg-y' id='image_1680082884'>
                                                <div className='img-inner dark'>
                                                    <img
                                                        width={1020}
                                                        height={574}
                                                        src={CENTURYDAYTU}
                                                        className='attachment-large size-large'
                                                        alt=''
                                                        sizes='(max-width: 1020px) 100vw, 1020px'
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col res-w bounceInUp eds-on-scroll medium-5 small-12 large-5' style={{ margin: 'auto' }}>
                                        <div className='col-inner'>
                                            <div id='PARAGRAPH474' className='ladi-element'>
                                                <h2 className='title' style={{ textAlign: 'center' }}>
                                                    <span>?????U T?? M???T L???N ??? H?????NG L???I TR???N ?????I</span>
                                                </h2>
                                                <p>
                                                    T???a l???c ngay trung t??m ???? th??? s??n bay Long Th??nh, Century City c??n l?? t??m ??i???m c???a 7 th??nh ph??? l???n trong
                                                    v??ng kinh t??? tr???ng ??i???m ph??a Nam v?? li???n k??? nhi???u khu c??ng nghi???p l???n nh?? Amata, Long Th??nh, B??nh S??n, L???c
                                                    An, khu c??ng ngh??? cao Techno Park Vi???t Nam ??? H??n Qu???c quy m?? 300 ha???.
                                                </p>
                                                <p>
                                                    ??i???u n??y k???t h???p v???i s??? h??nh th??nh c???a ???th??nh ph??? s??n bay??? s??? ?????m b???o t??? su???t l???i nhu???n cao v?? ???n ?????nh cho
                                                    c??c ch??? nh??n c???a Century City trong su???t th???i gian s??? h???u.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className='section duoi-mb' id='section_475683714'>
                            <div className='section-content relative'>
                                <div className='row' id='row-277236030'>
                                    <div className='col small-12 large-12'>
                                        <div className='col-inner'>
                                            <h2 className='title' style={{ textAlign: 'center' }}>
                                                <span className='bg-white'>M???u nh?? ??i???n h??nh</span>
                                            </h2>
                                        </div>
                                    </div>
                                </div>
                                <div className='row row-full-width' id='row-279482191'>
                                    {/* <div className='col medium-6 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='maunha' data-type='image' href={PHO1}>
                                                        <div className='image-cover' style={{ paddingTop: '100%' }}>
                                                            <img
                                                                width={712}
                                                                height={700}
                                                                src={PHO1}
                                                                className='attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 712px) 100vw, 712px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner'>
                                                        <p>M???U NH?? LI??N K??? V?????N</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-6 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='maunha' data-type='image' href={MAUNHAVUON}>
                                                        <div className='image-cover' style={{ paddingTop: '100%' }}>
                                                            <img
                                                                width={712}
                                                                height={700}
                                                                src={MAUNHAVUON}
                                                                className='attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 712px) 100vw, 712px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner'>
                                                        <p>M???u nh?? ph??? li??n k???</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-6 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='maunha' data-type='image' href={MAUSHOP}>
                                                        <div className='image-cover' style={{ paddingTop: '100%' }}>
                                                            <img
                                                                width={712}
                                                                height={700}
                                                                src={MAUSHOP}
                                                                className='attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 712px) 100vw, 712px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner'>
                                                        <p>M???u nh?? bi???t th???</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-6 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='maunha' data-type='image' href={MAU1}>
                                                        <div className='image-cover' style={{ paddingTop: '100%' }}>
                                                            <img
                                                                width={712}
                                                                height={700}
                                                                src={MAU1}
                                                                className='attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 712px) 100vw, 712px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner'>
                                                        <p>M???u Shophouse</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <Image.PreviewGroup>
                                        <div className='col medium-6 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='maunha' data-type='image' href={PHO1}> */}
                                                        <div >
                                                            <Image
                                                                // width={712}
                                                                // height={300}
                                                                src={PHO1}
                                                                className='attachment-original size-original'
                                                                alt=''
                                                            // sizes='(max-width: 712px) 100vw, 712px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner'>
                                                            <p>M???U NH?? LI??N K??? V?????N</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col medium-6 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='maunha' data-type='image' href={MAUNHAVUON}> */}
                                                        <div >
                                                            <Image
                                                                // width={712}
                                                                // height={300}
                                                                src={MAUNHAVUON}
                                                                className='attachment-original size-original'
                                                                alt=''
                                                            // sizes='(max-width: 712px) 100vw, 712px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner'>
                                                            <p>M???u nh?? ph??? li??n k???</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col medium-6 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='maunha' data-type='image' href={MAUSHOP}> */}
                                                        <div >
                                                            <Image
                                                                // width={712}
                                                                // height={300}
                                                                src={MAUSHOP}
                                                                className='attachment-original size-original'
                                                                alt=''
                                                            // sizes='(max-width: 712px) 100vw, 712px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner'>
                                                            <p>M???u nh?? bi???t th???</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col medium-6 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='maunha' data-type='image' href={MAU1}> */}
                                                        <div >
                                                            <Image
                                                                // width={712}
                                                                // height={300}
                                                                src={MAU1}
                                                                className='attachment-original size-original'
                                                                alt=''
                                                            // sizes='(max-width: 712px) 100vw, 712px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner'>
                                                            <p>M???u Shophouse</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Image.PreviewGroup>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #matbang' data-bullet='false' data-link='#matbang' data-title='M???t b???ng'>
                            <a name='matbang' />
                        </span>
                        <section className='section bd1 matbang bounceInUp eds-on-scroll' id='section_800114585'>
                            <div className='section-content relative'>
                                <div className='row' id='row-1006933714'>
                                    <div className='col small-12 large-12'>
                                        <div className='col-inner text-center'>
                                            <div className='section_header'>
                                                <h2 className='title' style={{ textAlign: 'center' }}>
                                                    <span>S?? ????? M???T B???NG CENTURY CITY KIM OANH</span>
                                                </h2>
                                                <div className='item-diathe pad-text' style={{ color: '#fff' }} />
                                            </div>
                                            <div style={{ color: '#fff' }} className='pad-text'>
                                                <p>
                                                    Khu ???? th???
                                                    <span style={{ color: '#e67e22' }}>
                                                        <em>
                                                            <strong> Century City Kim Oanh</strong>
                                                        </em>
                                                    </span>
                                                    ???????c x??y d???ng tr??n t???ng di???n t??ch ?????t
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>49,8 h</strong>a
                                                    </span>
                                                    , g???m 03 ph??n khu Century Center, Century Park v?? Century Garden. Trong ????,
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>253.980 m2</strong>
                                                    </span>{' '}
                                                    l?? di???n t??ch ?????t ???; ?????t c??ng tr??nh gi??o d???c l??{' '}
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>27.390 m2</strong>
                                                    </span>
                                                    ; ?????t c??ng tr??nh gi??o d???c{' '}
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>27.390 m2</strong>
                                                    </span>
                                                    ; ?????t c??y xanh, c??n l???i{' '}
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>204.180 m2</strong>
                                                    </span>{' '}
                                                    l?? ?????t giao th??ng v?? h??? t???ng k??? thu???t.
                                                </p>
                                                <p>
                                                    T???ng&nbsp;
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>2.150</strong>
                                                    </span>{' '}
                                                    s???n ph???m, t??? h???p g???m c??c lo???i h??nh ?????t n???n, nh?? ph??? th????ng m???i, nh?? li???n k??? v?????n, bi???t th???&nbsp;v?? khu chung
                                                    c?? cao t???ng. Theo ????, di???n t??ch c??c l?? ?????t&nbsp;dao ?????ng t???
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>100 m2 ??? 240 m2</strong>
                                                    </span>
                                                    . C??? th???
                                                </p>
                                                <table border={1} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>Lo???i h??nh</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Di???n t??ch ?????t</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Di???n t??ch x??y d???ng</strong>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>SHOPHOUSE</strong>
                                                            </td>
                                                            <td>120m2</td>
                                                            <td>93m2</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>BI???T TH???</strong>
                                                            </td>
                                                            <td>240m2</td>
                                                            <td>98m2</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>NH?? PH??? LI???N K???</strong>
                                                            </td>
                                                            <td>100m2</td>
                                                            <td>80m2</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>NH?? LI???N K??? V?????N</strong>
                                                            </td>
                                                            <td>108m2</td>
                                                            <td>85m2</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className='img has-hover x md-x lg-x y md-y lg-y' id='image_988154758'>
                                                <div className='img-inner dark'>
                                                    <a data-fancybox='tiendo' data-type='image' href={PHANLOBINHSON}>
                                                        <img
                                                            width={1024}
                                                            height={731}
                                                            src={PHANLOBINHSON}
                                                            className='attachment-original size-original'
                                                            alt=''
                                                            sizes='(max-width: 1024px) 100vw, 1024px'
                                                        />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #tiendo' data-bullet='false' data-link='#tiendo' data-title='Th?? vi???n'>
                            <a name='tiendo' />
                        </span>
                        <section className='section duoi-mb tienich thuvien' id='section_932336047'>
                            <div className='section-content relative hinhanhtiendo'>
                                <h2 className='title' style={{ textAlign: 'center' }}>
                                    <span className='bg-white'>Ti???n ????? d??? ??n</span>
                                </h2>
                                <div className='row row-fuild pad-text'>
                                    <div className='medium-12'>
                                        <div style={{ textAlign: 'center', fontSize: '18px' }}>
                                            <h3>
                                                <span style={{ color: '#e67e22' }}>Ti???n ????? thi c??ng d??? ??n Century City&nbsp; (Th??ng 6/2021)</span>
                                            </h3>
                                            <p>
                                                T??nh ?????n ?????u th??ng 6/2021,&nbsp;V???i ti???n ????? thi c??ng ???th???n t???c???, Century City n???i b???t v?? li??n t???c kh???ng ?????nh s???c
                                                n??ng t???i Long Th??nh. Qua 10 th??ng tri???n khai, hi???n h??? t???ng d??? ??n ???? ho??n thi???n h??n 80% g???m nh???ng h???ng m???c:
                                            </p>
                                            <p>
                                                ???? ???????ng n???i b??? tr???i nh???a v?? th??ng tho??ng, L??t g???ch v???a h??, c???nh quan c??y xanh r???ng l???n. H??? th???ng ????n ??i???n, h???
                                                th???ng c???p ??? tho??t n?????c. C?? ph?? s??n v?????n c??ng ??ang ???????c tri???n khai
                                            </p>
                                            <p>
                                                ????&nbsp;150 c??n shophouse ???????c ??u ti??n tri???n khai, m???t s??? c??n ??ang ???????c thi c??ng l??n ph???n m??i,&nbsp;C??c k??? quan
                                                ki???n tr??c th??? gi???i ??ang ho??n thi???n nh???ng kh??u cu???i c??ng
                                            </p>
                                            <p>
                                                ???? Nh???ng d??y shophoue mang phong c??ch Ch??u ??u d???n ho??n ch???nh,&nbsp;m???ng xanh l???n d???n v?? ???????c ph??n b??? xen k??? to??n
                                                d??? ??n. Qu???ng tr?????ng 12 cung ho??ng ?????o, c??c c??ng tr??nh ki???n tr??c v??? ?????i c???a th??? gi???i c??ng ???? ???????c trau chu???t v???i
                                                m???t di???n m???o m???i.
                                            </p>
                                            <p>
                                                ???? Kh???i c??ng x??y d???ng d??? ??n nh?? ph??? t???i d??? ??n Century City: S??ng nay (14/04/2021), Kim Oanh Group ???? kh???i c??ng
                                                x??y d???ng d??y nh?? ph??? li???n k??? thu???c d??? ??n Century City. ?????ng th??i n??y nh?? l???i cam k???t v??? ti???n ????? x??y d???ng d??? ??n
                                                v?? t???o s??? an t??m cho nh???ng kh??ch h??ng ???? l???a ch???n Century City.
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img alt='' height={567} src={KHOICONG14141708} width={850} />
                                            </p>
                                            <p>
                                                ???? D??? ki???n, qu?? 3/2021, Kim Oanh Group ti???n h??nh chuy???n nh?????ng cho kh??ch h??ng mua d??? ??n Century. ??i???u ???? l?? minh
                                                ch???ng uy t??n c???a T???p ??o??n, trong b???i c???nh ph??p l?? d??? ??n minh b???ch l?? ??u ti??n h??ng ?????u c???a nh?? ?????u t?? ???? th??? khi
                                                ????a ra quy???t ?????nh&nbsp;"xu???ng ti???n".
                                            </p>
                                            <h3>
                                                <span style={{ color: '#e67e22' }}>Ch??nh s??ch d??? ??n Century City 6/2021</span>
                                            </h3>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt='Ch??nh s??ch d??nh cho kh??ch h??ng mua s???n ph???m ?????t n???n'
                                                    height={2120}
                                                    src={CHINHSACH03191531}
                                                    width={3989}
                                                />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt='Ch??nh s??ch d??nh cho kh??ch h??ng mua s???n ph???m nh?? x??y s???n'
                                                    height={2120}
                                                    src={CHINHSACH03191521}
                                                    width={3989}
                                                />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt='Ch??nh s??ch d??nh cho kh??ch h??ng mua s???n ph???m bi???t th??? ?????t n???n'
                                                    height={2120}
                                                    src={CHINHSACH03191510}
                                                    width={3989}
                                                />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt='Ch??nh s??ch d??nh cho kh??ch h??ng mua s???n ph???m bi???t th??? x??y s???n'
                                                    height={2120}
                                                    src={CHINHSACH03191500}
                                                    width={3989}
                                                />
                                            </p>
                                            <h3>
                                                <span style={{ color: '#e67e22' }}>Ch??nh s??ch kh??ch h??ng VIP mua s???&nbsp;</span>
                                            </h3>
                                            <p style={{ textAlign: 'center' }}>
                                                <img alt='Ch??nh s??ch kh??ch h??ng mua s??? ' height={2120} src={CHINHSACH03191450} width={3989} />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img alt='' height={2120} src={CHINHSACH03191440} width={3989} />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img alt='' height={2120} src={CHINHSACH03191431} width={3989} />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt='H??nh ???nh 1000 chuy??n vi??n sale ch???p ???nh l??u ni???m ngay C???ng ch??nh d??? ??n Century City'
                                                    height={843}
                                                    src={CHINHSACH22213016}
                                                    width={1430}
                                                />
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className='row row-full-width' id='row-1779965586'>
                                    {/* <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P968551}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P968551}
                                                                data-src={P551418}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P968551}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P968551}
                                                                data-src={P968551}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P742879}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P742879}
                                                                data-src={P742879}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P435680}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P435680}
                                                                data-src={P435680}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P852814}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P852814}
                                                                data-src={P852814}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P119636}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P119636}
                                                                data-src={P119636}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P938179}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P938179}
                                                                data-src={P938179}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P279648}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P279648}
                                                                data-src={P279648}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P793963}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P793963}
                                                                data-src={P793963}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P790991}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P790991}
                                                                data-src={P790991}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P856793}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P856793}
                                                                data-src={P856793}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col medium-4 small-6 large-3'>
                                        <div className='col-inner'>
                                            <div className='box has-hover has-hover box-text-bottom'>
                                                <div className='box-image'>
                                                    <a data-fancybox='hinhanh' data-type='image' href={P301888}>
                                                        <div className>
                                                            <img
                                                                width={1246}
                                                                height={800}
                                                                src={P301888}
                                                                data-src={P301888}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className='box-text text-center'>
                                                    <div className='box-text-inner' />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                */}
                                    <Image.PreviewGroup>
                                        <div className='col medium-4 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='hinhanh' data-type='image' href={P968551}> */}
                                                        <div className>
                                                            <Image
                                                                // width={1246}
                                                                // height={300}
                                                                src={P968551}
                                                                data-src={P968551}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col medium-4 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='hinhanh' data-type='image' href={P742879}> */}
                                                        <div className>
                                                            <Image
                                                                // width={1246}
                                                                // height={300}
                                                                src={P742879}
                                                                data-src={P742879}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col medium-4 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='hinhanh' data-type='image' href={P435680}> */}
                                                        <div className>
                                                            <Image
                                                                // width={1246}
                                                                // height={300}
                                                                src={P435680}
                                                                data-src={P435680}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col medium-4 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='hinhanh' data-type='image' href={P852814}> */}
                                                        <div className>
                                                            <Image
                                                                // width={1246}
                                                                // height={300}
                                                                src={P852814}
                                                                data-src={P852814}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col medium-4 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='hinhanh' data-type='image' href={P119636}> */}
                                                        <div className>
                                                            <Image
                                                                // width={1246}
                                                                // height={300}
                                                                src={P119636}
                                                                data-src={P119636}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col medium-4 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='hinhanh' data-type='image' href={P938179}> */}
                                                        <div className>
                                                            <Image
                                                                // width={1246}
                                                                // height={300}
                                                                src={P938179}
                                                                data-src={P938179}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col medium-4 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='hinhanh' data-type='image' href={P279648}> */}
                                                        <div className>
                                                            <Image
                                                                // width={1246}
                                                                // height={300}
                                                                src={P279648}
                                                                data-src={P279648}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col medium-4 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        {/* <a data-fancybox='hinhanh' data-type='image' href={P793963}> */}
                                                        <div className>
                                                            <Image
                                                                // width={1246}
                                                                // height={300}
                                                                src={P793963}
                                                                data-src={P793963}
                                                                className='lazy attachment-original size-original'
                                                                alt=''
                                                                sizes='(max-width: 1246px) 100vw, 1246px'
                                                            />
                                                        </div>
                                                        {/* </a> */}
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className='col medium-4 small-6 large-3'>
                                            <div className='col-inner'>
                                                <div className='box has-hover has-hover box-text-bottom'>
                                                    <div className='box-image'>
                                                        <a data-fancybox='hinhanh' data-type='image' href={P856793}>
                                                            <div>
                                                                <Image
                                                                    // width={1246}
                                                                    // height={300}
                                                                    src={P856793}
                                                                    data-src={P856793}
                                                                    className='lazy attachment-original size-original'
                                                                    alt=''
                                                                    sizes='(max-width: 1246px) 100vw, 1246px'
                                                                />
                                                            </div>
                                                        </a>
                                                    </div>
                                                    <div className='box-text text-center'>
                                                        <div className='box-text-inner' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </Image.PreviewGroup>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #tintuc' data-bullet='false' data-link='#tintuc' data-title='Li??n h???'>
                            <a name='tintuc' />
                        </span>
                        <section className='section'>
                            <div className='section-content relative'>
                                <div className='row row-fluid align-middle align-center'>
                                    <div id='col-150993186' className='col small-12 large-12' data-animate='fadeInUp' data-animated='true'>
                                        <div className='col-inner text-center'>
                                            <div className='container section-title-container'>
                                                <h2 className='title' style={{ textAlign: 'center' }}>
                                                    <span className='bg-white'>TH???C M???C V??? D??? ??N CENTURY CITY</span>
                                                </h2>
                                            </div>
                                            <div>
                                                <ul id='accordion'>
                                                    <li className='item itemx' style={{ listStyle: 'none' }}>
                                                        <div style={{ display: 'flex', padding: '20px' }}>
                                                            <div
                                                                onClick={() => {
                                                                    setIsItemShow2(false)
                                                                    setIsItemShow1(!isItemShow1)
                                                                    setIsItemShow3(false)
                                                                }}
                                                                style={{ borderRight: '1px solid #d6cbcb', paddingRight: '7px' }}>
                                                                {' '}
                                                                <FontAwesomeIcon
                                                                    style={{ transition: 'all 500ms' }}
                                                                    icon={!isItemShow1 ? faChevronRight : faChevronDown}
                                                                />{' '}
                                                            </div>
                                                            <div>
                                                                <h3 style={{ color: '#2121ff', paddingLeft: '5px', textAlign: 'left' }}>
                                                                    Ch??? ?????u t?? d??? ??n Century City l?? ai?
                                                                </h3>
                                                                <div
                                                                    style={{ textAlign: 'left', paddingLeft: '5px', display: !isItemShow1 ? 'none' : '' }}
                                                                    className='content'>
                                                                    <p>C??ng ty C??? ph???n ?????u t?? v?? ph??t tri???n Thu???n L???i.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className='item itemx' style={{ listStyle: 'none' }}>
                                                        <div style={{ display: 'flex', padding: '20px' }}>
                                                            <div
                                                                onClick={() => {
                                                                    setIsItemShow2(!isItemShow2)
                                                                    setIsItemShow1(false)
                                                                    setIsItemShow3(false)
                                                                }}
                                                                style={{ borderRight: '1px solid #d6cbcb', paddingRight: '7px' }}>
                                                                {' '}
                                                                <FontAwesomeIcon
                                                                    style={{ transition: 'all 500ms' }}
                                                                    icon={!isItemShow2 ? faChevronRight : faChevronDown}
                                                                />{' '}
                                                            </div>
                                                            <div>
                                                                <h3 style={{ color: '#2121ff', paddingLeft: '5px', textAlign: 'left' }}>
                                                                    Ch??? ?????u t?? d??? ??n Century City l?? ai?
                                                                </h3>
                                                                <div
                                                                    style={{ textAlign: 'left', paddingLeft: '5px', display: !isItemShow2 ? 'none' : '' }}
                                                                    className='content'>
                                                                    <p>
                                                                        {' '}
                                                                        Gi?? b??n ?????t n???n 16 tri???u ?????ng/m2. Gi?? nh?? ph???, shophouse, bi???t th??? vui l??ng li??n h???
                                                                        Hotline 0932 744 445
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    <li className='item itemx' style={{ listStyle: 'none' }}>
                                                        <div style={{ display: 'flex', padding: '20px' }}>
                                                            <div
                                                                onClick={() => {
                                                                    setIsItemShow2(false)
                                                                    setIsItemShow1(false)
                                                                    setIsItemShow3(!isItemShow3)
                                                                }}
                                                                style={{ borderRight: '1px solid #d6cbcb', paddingRight: '7px' }}>
                                                                <FontAwesomeIcon
                                                                    style={{ transition: 'all 500ms' }}
                                                                    icon={!isItemShow3 ? faChevronRight : faChevronDown}
                                                                />{' '}
                                                            </div>
                                                            <div>
                                                                <h3 style={{ color: '#2121ff', paddingLeft: '5px', textAlign: 'left' }}>
                                                                    Ph??p l?? d??? ??n Century City nh?? th??? n??o?
                                                                </h3>
                                                                <div
                                                                    style={{ textAlign: 'left', paddingLeft: '5px', display: !isItemShow3 ? 'none' : '' }}
                                                                    className='content'>
                                                                    <p>Ph??p l?? minh b???ch, ???? c?? tr??ch l???c t???ng n???n, ph?? duy???t 1/500.</p>
                                                                    <p>D??? ki???n qu?? 3/2021 chuy???n nh?????ng s??? mang t??n kh??ch h??ng.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* <li className='item'>
                                                        <h3>Gi?? b??n n??m 2021 l?? bao nhi??u?</h3>
                                                        <div className='content'>
                                                            <p>
                                                                Gi?? b??n ?????t n???n 16 tri???u ?????ng/m2. Gi?? nh?? ph???, shophouse, bi???t th??? vui l??ng li??n h??? Hotline 0932
                                                                744 445
                                                            </p>
                                                        </div>
                                                    </li> */}
                                                    {/* <li className='item'>
                                                        <h3>Ph??p l?? d??? ??n Century City nh?? th??? n??o?</h3>
                                                        <div className='content'>
                                                            <p>Ph??p l?? minh b???ch, ???? c?? tr??ch l???c t???ng n???n, ph?? duy???t 1/500.</p>
                                                            <p>D??? ki???n qu?? 3/2021 chuy???n nh?????ng s??? mang t??n kh??ch h??ng.</p>
                                                        </div>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #lhmh' data-bullet='false' data-link='#lhmh' data-title='Li??n h???'>
                            <a name='lhmh' />
                        </span>
                    </div>
                </main>

                <footer id='footer' className='footer-wrapper'>
                    <section className='section dangkyfo' id='section_84277081'>
                        <div className='section-content relative'>
                            <h2 className='title' style={{ textAlign: 'center' }}>
                                <span className='bg-white'>????NG K?? NH???N TH??NG TIN</span>
                            </h2>
                            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 25px', padding: '0 20px', color: '#222', fontSize: '17px' }}>
                                Vui l??ng ????? l???i th??ng tin, ?????i ng?? chuy??n vi??n t?? v???n c???a ch??ng t??i s??? li??n h???, t?? v???n v?? g???i th??ng tin cho qu?? v??? trong th???i
                                gian nhanh nh???t
                            </div>
                            <img src={CONTACTNOW} style={{ margin: '10px auto', display: 'block' }} />
                            <div className='wpcf7' id='wpcf7-f592-o2' lang='vi' dir='ltr' style={{ padding: '0 15px' }}>
                                <div className='screen-reader-response' />
                                <div className='wpcf7-form form-send'>
                                    <div className='row dangkythongtin'>
                                        <div className='col medium-12 small-12 large-6'>
                                            <div className='col-inner'>
                                                <span className='wpcf7-form-control-wrap text-324'>
                                                    <input
                                                        type='text'
                                                        name='fullname'
                                                        size={40}
                                                        // className='wpcf7-form-control wpcf7-text'
                                                        aria-invalid='false'
                                                        placeholder='H??? t??n'
                                                        onChange={handleChange}
                                                        value={data.fullname}
                                                    />
                                                </span>
                                            </div>
                                            <p />
                                        </div>
                                        <div className='col medium-12 small-12 large-6'>
                                            <div className='col-inner'>
                                                <span className='wpcf7-form-control-wrap tel-244'>
                                                    <input
                                                        type='tel'
                                                        name='phone'
                                                        size={40}
                                                        className='wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel'
                                                        aria-invalid='false'
                                                        placeholder='S??? ??i???n tho???i'
                                                        onChange={handleChange}
                                                        value={data.phone}
                                                    />
                                                </span>
                                            </div>
                                            <p />
                                        </div>
                                        <div className='col medium-12 small-12 large-12'>
                                            <div className='col-inner'>
                                                <span className='wpcf7-form-control-wrap email-69'>
                                                    <input
                                                        type='text'
                                                        name='message'
                                                        size={255}
                                                        className='wpcf7-form-control wpcf7-text wpcf7-email wpcf7-validates-as-email'
                                                        aria-invalid='false'
                                                        placeholder='Ghi ch?? li??n h???...'
                                                        onChange={handleChange}
                                                        value={data.message}
                                                    />
                                                </span>
                                            </div>
                                            <p />
                                        </div>
                                        <div className='col medium-12 small-12 large-12 formgiua' style={{ textAlign: 'center' }}>
                                            <div className='col-inner '>
                                                <button className='wpcf7-form-control wpcf7-submit' onClick={handleSubmit}>
                                                    ????ng k??
                                                </button>
                                            </div>
                                            <p />
                                        </div>
                                    </div>
                                    <div className='clear' />
                                    <div className='form-alert' style={{ display: 'none' }} />
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className='section bd1' id='section_166780513'>
                        <div className='bg section-bg fill bg-fill bg-loaded' />
                        <div className='section-content relative'>
                            <div className='row' id='row-44858861'>
                                <div className='col medium-6 small-12 large-6'>
                                    <div className='col-inner text-center'>
                                        <div className='img has-hover x md-x lg-x y md-y lg-y' id='image_682519700'>
                                            <div className='img-inner dark'>
                                                <img
                                                    width={638}
                                                    height={679}
                                                    src={LOGOKOOANGH}
                                                    className='attachment-original size-original'
                                                    alt=''
                                                    sizes='(max-width: 638px) 100vw, 638px'
                                                />
                                            </div>
                                        </div>
                                        <h4 style={{ color: '#ffc441' }}>PH??T TRI???N V?? PH??N PH???I</h4>
                                    </div>
                                </div>
                                <div className='col medium-6 small-12 large-6'>
                                    <div className='col-inner' style={{ fontSize: '17px', lineHeight: '30px' }}>
                                        <div className='box pdtop' style={{ marginBottom: '20px' }}>
                                            <p className='contact-title'>Th??ng tin li??n h???</p>
                                            <h5>C??NG TY C??? PH???N T???P ??O??N ?????A ???C KIM OANH</h5>
                                            <div className='box-content'>?????a ch???: 355 ??i???n Bi??n Ph???, Ph?????ng 15, Qu???n B??nh Th???nh Th??nh Ph??? H??? Ch?? Minh</div>
                                        </div>
                                        <div className='box'>
                                            <p style={{ marginBottom: '0px' }}>
                                                <i className='fa fa-phone' /> Hotline:{' '}
                                                <a href='tel:0907 839 986'>
                                                    <b>0907 839 986</b>
                                                </a>
                                            </p>
                                            <p>
                                                <i className='fa fa-envelope-square' /> Email: andiaockimoanh@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className='col-inner' style={{ fontSize: '17px', lineHeight: '30px' }}>
                                        <p>
                                            <strong>
                                                ????n v??? ph??t tri???n:&nbsp;
                                                <a href='https://www.congtykimoanh.vn/' target='_blank'>
                                                    ?????a ???c Kim Oanh
                                                </a>
                                            </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* <a href='#top' className='' id='top-link'>
                        <i className='fa fa-chevron-up' />
                        tr
                    </a> */}
                </footer>
            </div>

            <div id='main-menu' className='mobile-sidebar no-scrollbar mfp-containerr' style={{ display: isMenu ? '' : 'none' }}>
                <div
                    style={{ width: '100%', height: '100%' }}
                    onClick={() => {
                        setIsmenu(false)
                    }}></div>
                <div className='mfp-content'>
                    <div className='sidebar-menu no-scrollbar'>
                        <ul className='nav nav-sidebar nav-vertical nav-uppercase'>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom px-bd'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#gioithieu' className='nav-top-link pd-px'>
                                    GI???I THI???U
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom px-bd'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#vitri' className='nav-top-link pd-px'>
                                    V??? TR??
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom px-bd'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#tienich' className='nav-top-link pd-px'>
                                    TI???N ??CH
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#sanpham' className='nav-top-link pd-px'>
                                    S???N PH???M
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#matbang' className='nav-top-link pd-px'>
                                    M???T B???NG
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#tiendo' className='nav-top-link pd-px'>
                                    TI???N ?????
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#banggia' className='nav-top-link pd-px'>
                                    B???NG GI??
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#lhmh' className='nav-top-link pd-px'>
                                    LI??N H???
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='hotline-phone-ring-wrap'>
                <div className='hotline-phone-ring'>
                    <div className='hotline-phone-ring-img-circle'>
                        <a href='tel:0907 839 986' className='pps-btn-img'>
                            {' '}
                            <img src={PHONE} alt='Hotline' width='50' />{' '}
                        </a>
                    </div>
                </div>
                <div className='hotline-bar'>
                    <a href='tel:0907 839 986'>
                        {' '}
                        <span className='text-hotline'>0907 839 986</span>{' '}
                    </a>
                </div>
            </div>
            <div className='hotline-zalo-ring-wrap'>
                <a href='https://zalo.me/andiaockimoanh' target='_blank'>
                    <img src={ZALO} alt='Hotline' width='50' style={{ borderRadius: '50%', cursor: 'pointer' }} />
                </a>
            </div>
            <div style={{ width: '100%' }}>
                <div
                    id="toansida"
                    className='hotline-zalo-ring-wrap'
                    style={{
                        right: 8,
                        // paddingRight: '5px',
                        // paddingTop: '4px',
                        display: 'none'
                    }}>
                    <a
                        id="luoiqua"
                        href="#top"
                        style={{
                            border: '5px solid #f7e254',
                            width: '50px',
                            height: '50px',
                            position: 'absolute',
                            bottom: '0',
                            height: '50px',
                            borderRadius: '50%',
                            right: 0
                        }}>
                        <FontAwesomeIcon
                            style={{ transition: 'all 500ms', fontWeight: 'bold', fontSize: '40px', textAlign: 'center', paddingLeft: '8px' }}
                            icon={faChevronUp}
                            color={'#f7e254'}
                        />
                    </a>
                    {/* <img src={ZALO} alt='Hotline' width='20' style={{ borderRadius: '50%', cursor: 'pointer' }} /> */}
                </div>
            </div>
            {isHidden && (
                <div id='modal1' className='popup1 md-effect md-show'>
                    <div className='form-popup' action='#' id='popupregister'>
                        <div className='form-popup-content'>
                            <div className='md-form'>
                                <img src={CROSS} className='close' id='md-close' title='????ng' onClick={closeModal} />
                                <div className='form-inner'>
                                    <div className='form-text'>
                                        <h3 style={{ textAlign: 'center' }}>
                                            <span style={{ color: '#f94b00' }}>Y??U C???U G???I T?? V???N</span>
                                        </h3>
                                        <p style={{ textAlign: 'center' }}>
                                            ???&nbsp; <strong>?????T</strong>&nbsp;<strong>C???C 50 TRI???U</strong>
                                        </p>
                                        <p style={{ textAlign: 'center' }}>
                                            ???&nbsp;
                                            <strong>
                                                CH???N V??? TR?? ?????P CH??? T??? <span style={{ color: '#e74c3c' }}>16.8 TR/M2</span>
                                            </strong>
                                        </p>
                                        <p style={{ textAlign: 'center' }}>
                                            ???&nbsp;<b>&nbsp;T???i b???ng gi?? 200 c??n ?????p h??m nay</b>
                                        </p>
                                        <p style={{ textAlign: 'center' }}>
                                            <strong>&nbsp;</strong>???&nbsp;<strong>Qu?? t???ng NGAY 20 ch??? SJC</strong>
                                        </p>
                                        <p style={{ textAlign: 'center' }}>
                                            <strong>Ho???c li??n h??? HOTLINE:</strong>
                                        </p>
                                        <p style={{ textAlign: 'center' }}>
                                            ??????&nbsp;&nbsp;
                                            <span style={{ fontSize: '20px' }}>
                                                <strong>
                                                    <a href='tel:0907 839 986'>0907 839 986</a>
                                                </strong>
                                            </span>
                                        </p>
                                        <input type='text' name='fullname' placeholder='H??? t??n (*)' onChange={handleChange} value={data.fullname} />
                                        <input type='text' name='phone' placeholder='S??? ??i???n tho???i (*)' onChange={handleChange} value={data.phone} />
                                        <textarea
                                            type='text'
                                            name='message'
                                            placeholder='Ghi ch??...'
                                            rows={4}
                                            autoComplete='off'
                                            value
                                            defaultValue={''}
                                            onChange={handleChange}
                                            value={data.message}
                                        />
                                        <button onClick={handleSubmit}>
                                            G???i th??ng tin <i className='fa fa-paper-plane' />
                                        </button>
                                        <div id='loading' style={{ display: 'none' }}>
                                            <span>
                                                <img src='/js/pop/ajax-loader.gif' align='middle' valign='middle' border={0} />
                                                &nbsp;Loading...{'{'}' '{'}'}
                                            </span>
                                        </div>
                                        <input
                                            name='__RequestVerificationToken'
                                            type='hidden'
                                            defaultValue='_eUQVq3q2l-F0GnpI7GnZJMomgFHFHe1LmhGgRm0t52LI7Fe536Yj1rE8pkn1EGeOVF0xEeb3TzbVfUZGrbL5-gfo9dfDeMBWy2WniZiWT01'
                                        />
                                    </div>
                                </div>
                                <div className='clear' />
                                {/* <div className='form-alert' style={{ display: 'none' }} /> */}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className='md-overlay'></div>
        </body>
    )
}

export default LandingPage
