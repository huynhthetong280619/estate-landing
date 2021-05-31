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
                iconRoll.style.display=""
            } else {
                stickDestination.classList.remove('stuck')
                iconRoll.style.display="none"
            }
            if(this.scrollY > 200){

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

        if (!data.fullname || !data.phone || !data.message) {
            console.log('Toast')
            notification.warning({
                placement: 'topRight',
                message: 'Cảnh báo',
                description: 'Không thành công.Vui lòng thử lại!',
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
                message: 'Thông báo',
                description: 'Đăng ký thành công!',
            })
        } catch (error) {
            notification.error({
                placement: 'topRight',
                message: 'Lỗi',
                description: 'Hệ thống xảy ra lỗi!Vui lòng thử lại!',
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
                                    <ul className='header-nav header-nav-main nav nav-left nav-uppercase'>
                                        <li className='menu-item'>
                                            <a href='#gioithieu' className='nav-top-link'>
                                                Giới thiệu
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#vitri' className='nav-top-link'>
                                                Vị trí
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#tienich' className='nav-top-link'>
                                                Tiện ích
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#sanpham' className='nav-top-link'>
                                                Sản phẩm
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className='flex-col hide-for-medium flex-right'>
                                    <ul className='header-nav header-nav-main nav nav-right nav-uppercase'>
                                        <li className='menu-item'>
                                            <a href='#matbang' className='nav-top-link'>
                                                Mặt bằng
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#tiendo' className='nav-top-link'>
                                                Tiến Độ
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#banggia' className='nav-top-link'>
                                                Bảng giá
                                            </a>
                                        </li>
                                        <li className='menu-item'>
                                            <a href='#lhmh' className='nav-top-link'>
                                                Liên hệ
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
                            <span className='scroll-to' data-label='Scroll to: #gioithieu' data-bullet='false' data-link='#gioithieu' data-title='Giới thiệu'>
                                <a name='gioithieu' />
                            </span>
                            <section className='section-description'>
                                <p>
                                    <strong>
                                        Chào mừng Quý khách&nbsp;đến Website chính thức phân phối dự án Century City của Kim Oanh Group. Dưới đây là Tất Tần Tật
                                        thông tin mới về TIẾN ĐỘ thi công, GIÁ BÁN và CHÍNH SÁCH ƯU ĐÃI tháng 6/2021.
                                    </strong>
                                </p>
                                <p>
                                    <span style={{ color: '#e67e22' }}>
                                        <b>[VIDEO] Tiến độ xây dựng dự án Cenyury City (Tháng 6/2021)</b>
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
                                        <b>ĐỂ TIẾT KIỆM THỜI GIAN TÌM HIỂU DỰ ÁN CENTURY CITY</b>
                                    </span>
                                </h3>
                                <blockquote>
                                    <p>
                                        Quý khách vui lòng điền thông tin bên dưới để nhận tư vấn, ưu tiên chọn vị trí đẹp và căn phù hợp, Hoặc liên hệ{' '}
                                        <span style={{ fontSize: '20px' }}>
                                            <strong>
                                                <u>
                                                    <a href='tel:0907 839 986'>
                                                        <span style={{ color: '#e67e22' }}>0907 839 986</span>
                                                    </a>
                                                </u>
                                            </strong>
                                        </span>
                                        &nbsp;để nhận tư vấn trực tiếp.<strong>&nbsp;</strong>
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
                                                            placeholder='Họ tên'
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
                                                            placeholder='Số điện thoại'
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
                                                            placeholder='Ghi chú...'
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
                                                        Đăng ký
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
                                    <span className='bg-white'>CENTURY CITY: TÂM ĐIỂM KẾT NỐI ĐẦU TƯ</span>
                                </h2>
                                <div className='row row-fluid'>
                                    <div className='col large-6 medium-12 small-12'>
                                        <div className='content-box'>
                                            <div className='res-w7 medium-12 small-12 large-12'>
                                                <div className='col-inner'>
                                                    <p>
                                                        <span style={{ color: '#e67e22' }}>
                                                            <strong>CƠ HỘI CUỐI CÙNG SỞ HỮU PHÂN KHU ĐẸP NHẤT VỚI GIÁ TỐT NHẤT&nbsp;</strong>
                                                        </span>
                                                    </p>
                                                    <p>
                                                        <i>➤</i> Sổ đỏ từng nền – Thanh toán ngay, sở hữu liền tay, Giá chỉ
                                                        <span className='hotlinec'>16.8&nbsp;triệu/m²</span>, OCB&nbsp;hỗ trợ vay
                                                        <span className='hotlinec'>70%</span> giá trị, Quà tặng lên đến 20 chỉ vàng
                                                    </p>
                                                    <p>
                                                        <i>➤&nbsp;</i>Cơ hội tham gia chương trình khuyến mãi “CÙNG KIM OANH KẾT NỐI ĐẦU TƯ” với tổng giá trị 20
                                                        tỷ
                                                    </p>
                                                    <p>
                                                        <i>☎️</i>Liên hệ ngay:
                                                        <span style={{ fontSize: '20px' }}>
                                                            <strong>
                                                                <u>
                                                                    <a href='tel:0907 839 986'>
                                                                        <span style={{ color: '#e67e22' }}>0907 839 986</span>
                                                                    </a>
                                                                </u>
                                                            </strong>
                                                        </span>
                                                        &nbsp;(Phòng kinh doanh Chủ Đầu Tư).&nbsp;Hỗ trợ miễn phí xe đưa đón quý khách tham quan dự án 24/7.
                                                    </p>
                                                    <a
                                                        className='button primary bounceInUp eds-on-scroll btn-animate popup'
                                                        href='#'
                                                        onClick={(e) => {
                                                            e.preventDefault()
                                                            openModal()
                                                        }}>
                                                        <span>ĐĂNG KÝ NGAY</span>
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
                                <h2 style={{ textAlign: 'center' }}>BẢNG GIÁ MỚI NHẤT</h2>
                                <p style={{ textAlign: 'center' }}>
                                    Tải ngay bảng giá mới nhất 6/2021 của&nbsp;200 lô đẹp nhất dự án Century City tại Long Thành. Bảng giá bán chính thức từ Kim
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
                                        <span>TẢI BẢNG GIÁ ĐẦY ĐỦ</span>
                                    </a>
                                </p>
                                <p style={{ textAlign: 'center' }}>
                                    <i>☎️</i>Liên hệ ngay:
                                    <span style={{ fontSize: '20px' }}>
                                        <strong>
                                            <u>
                                                <a href='tel:0907 839 986'>
                                                    <span style={{ color: '#e67e22' }}>0907 839 986</span>
                                                </a>
                                            </u>
                                        </strong>
                                    </span>
                                    &nbsp;(Phòng kinh doanh Chủ Đầu Tư)
                                </p>
                                <h3 style={{ textAlign: 'center' }}>
                                    <span style={{ color: '#e67e22' }}>
                                        <strong>Giá một số căn Shophouse đẹp, KHÁCH VIP chọn ngay</strong>
                                    </span>
                                </h3>
                                <table border={1} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <strong>MÃ LÔ</strong>
                                            </td>
                                            <td>
                                                <strong>LOẠI SẢN PHẨM</strong>
                                            </td>
                                            <td>
                                                <strong>DIỆN TÍCH</strong>
                                            </td>
                                            <td>
                                                <strong>Giá nhà và đất gồm VAT</strong>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>Lô A1 ô47</strong>
                                            </td>
                                            <td>NHÀ XÂY SẴN</td>
                                            <td>118.9m2</td>
                                            <td>&nbsp;7,704,476,000&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>Lô A1 ô48</strong>
                                            </td>
                                            <td>NHÀ XÂY SẴN</td>
                                            <td>118.8m2</td>
                                            <td>&nbsp;6,399,940,000&nbsp;</td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <strong>Lô A9 ô4</strong>
                                            </td>
                                            <td>NHÀ XÂY SẴN</td>
                                            <td>100m2</td>
                                            <td>&nbsp;4,331,368,000&nbsp;</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div style={{ textAlign: 'center' }}>
                                    <figure className='image' style={{ display: 'inline-block' }}>
                                        <img
                                            alt='Tham khảo giá một số Shophouse xây sẵn tại Long Thành'
                                            height={646}
                                            src={GIASHOPHOUSECENTURYCITY25214402}
                                            width={1280}
                                        />
                                        <figcaption>Tham khảo giá một số Shophouse xây sẵn tại Long Thành</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </section>
                        <section style={{ margin: '20px 0' }}>
                            <div>
                                <h2 style={{ textAlign: 'center', padding: '30px 0' }}>
                                    <span className='bg-white'>VIDEO GIỚI THIỆU</span>
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
                                    <span className='gradient-text'>Lý do nên đầu tư vào bất động sản Long Thành</span>
                                </h2>
                                <div className='row row-fluid' id='row-601377024' style={{ marginTop: '3em' }}>
                                    <div className='col res-w7 bounceInLeft eds-on-scroll medium-6 small-12 large-6'>
                                        <div className='col-inner'>
                                            <div className='icon'>
                                                <div className='num'>1</div>
                                                <div className='mota-icon'>
                                                    <p>Liền kề TP.Biên Hòa, TPHCM và ngay tâm điểm của vùng kinh tế trọng điểm phía Nam</p>
                                                </div>
                                            </div>
                                            <div className='icon'>
                                                <div className='num'>2</div>
                                                <div className='mota-icon'>
                                                    <p>
                                                        Là đầu mối giao thông khu vực phía Nam với 5 tuyến cao tốc; 3 tuyến đường sắt, metro; hệ thống cảng biển
                                                        quốc tế; 4 tuyến quốc lộ và sân bay quốc tế Long Thành quy mô tầm cỡ khu vực Đông Nam Á.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='icon'>
                                                <div className='num'>3</div>
                                                <div className='mota-icon'>
                                                    <p>
                                                        Nằm ngay lõi trung tâm “thành phố sân bay” và là trung tâm giáo dục, đào tạo nguồn nhân lực và phát
                                                        triển kỹ thuật cao của Đồng Nai
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
                                                    <p>Sở hữu 5 khu công nghiệp lớn và thuộc Top đầu các địa phương thu hút vốn đầu tư của Đồng Nai.</p>
                                                </div>
                                            </div>
                                            <div className='icon'>
                                                <div className='num'>5</div>
                                                <div className='mota-icon'>
                                                    <p>
                                                        Quỹ đất phát triển dự án của TP. Biên Hòa ngày càng khan hiếm, Đồng Nai mở rộng không gian đô thị về
                                                        phía Đông Nam gắn với sân bay Long Thành
                                                    </p>
                                                </div>
                                            </div>
                                            <div className='icon'>
                                                <div className='num'>6</div>
                                                <div className='mota-icon'>
                                                    <p>
                                                        Mặt bằng bất động sản Long Thành thấp hơn nhiều so với TP.Biên Hòa, quận 9 (TPHCM) nhưng tiềm năng tăng
                                                        giá không thua kém.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #tongquan' data-bullet='false' data-link='#tongquan' data-title='Giới thiệy'>
                            <a name='tongquan' />
                        </span>
                        <section className='section pd-ss bd1' id='section_560233019'>
                            <div className='bg section-bg fill bg-fill bg-loaded' />
                            <div className='section-content relative'>
                                <div className='section_header'>
                                    <h2 className='title eds-on-scroll' style={{ textAlign: 'center' }}>
                                        <span className='bg-white'>TỔNG QUAN DỰ ÁN CENTURY CITY</span>
                                    </h2>
                                    <div className='description'>
                                        <p>
                                            Khu đô thị&nbsp;<strong>Century City</strong>&nbsp;có quy mô lên đến 49,8 ha tọa lạc ngay sân bay tỷ đô Long Thành,
                                            cảng trung chuyển quốc tế tầm cỡ khu vực châu Á, với công suất 100 triệu lượt khách và 5 triệu tấn hàng hóa mỗi năm,
                                            hứa hẹn trở thành một khu đô thị thương mại – dịch vụ đẳng cấp và góp phần vào bước chuyển mình mạnh mẽ của Long
                                            Thành, trên chặng đường phát triển thành&nbsp;<strong>“thành phố sân bay</strong>” tầm cỡ quốc tế.
                                        </p>
                                    </div>
                                </div>
                                <div className='row row-fluid align-middle align-center' id='row-429826978'>
                                    <div className='col left-0 pd15 res-w medium-5 small-12 large-5'>
                                        <div className='col-inner'>
                                            <div className='item-diathe fadeInLeft eds-on-scroll'>
                                                <fieldset className='fadeInRight eds-on-scroll text_tongquan'>
                                                    <legend>
                                                        <span style={{ fontSize: '18px' }}>THÔNG TIN TỔNG QUAN</span>
                                                    </legend>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Tên dự án: </strong> Century City
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Tên quy hoạch: </strong> Khu dân cư Bình Sơn
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Vị trí: </strong> Đường ĐT 769 và đường Cầu Mên; huyện Long Thành, tỉnh Đồng Nai
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Qui mô:</strong> 49,8 ha gồm 2.150 sản phẩm nhà phố, biệt thự, shophouse
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Chủ đầu tư:</strong> Công ty CP Đầu tư và phát triển Thuận Lợi
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Phát triển và phân phối:</strong> Kim Oanh Group
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}> Tiện ích nội khu:</strong> Công viên cảnh quan 2 ha; quảng trường 12 cung hoàng đạo,
                                                        3 công viên tiểu khu; trường học từ mầm non đến THCS; Trung tâm Thương mại – Hội nghị Century Palace
                                                        1,2ha, hồ bơi…
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}>Tiện ích liên kết: </strong> TTHC Long Thành; chợ Bình Sơn, chợ Long Thành; Vincom
                                                        Plaza; khu du lịch sinh thái Thác Giang Điền, sân golf Long Thành…
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}>Hạ tầng:</strong> Cuối quý 3 – 2020, Giao nền quý 4/2020, Giao nhà quý 1/2021
                                                    </p>
                                                    <p style={{ fontSize: '15px' }}>
                                                        <strong style={{}}>Nguồn gốc quỹ đất:</strong> Thông qua đấu giá vào tháng 7/2019 với mức giá 1.270 tỷ
                                                        đồng
                                                    </p>
                                                </fieldset>
                                            </div>
                                            {/* {'{'}/*{' '} */}
                                            {/* <a className='button primary is-outline form-bat  bounceInUp  eds-on-scroll' style={{ borderRadius: '10px' }}>
                                                <span>ĐĂNG KÝ NGAY</span>
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
                                                <span className='bg-white'>Century City và những con số</span>
                                            </h2>
                                        </div>
                                    </div>
                                    <div className='col bounceInUp eds-on-scroll small-12 large-12'>
                                        <div className='col-inner'>
                                            <div className='col__icon'>
                                                {/* <i className='fa fa-globe' /> */}
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faGlobeAfrica} />
                                                <div className='col__icon_t1'>49,8 ha</div>
                                                <div className='col__icon_t2'>Quy mô dự án</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faHome} />
                                                <div className='col__icon_t1'>2.150</div>
                                                <div className='col__icon_t2'>Sản phẩm</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faTree} />

                                                <div className='col__icon_t1'>30.000 m²</div>
                                                <div className='col__icon_t2'>Mảng xanh</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faIndustry} />

                                                <div className='col__icon_t1'>12.450 m²</div>
                                                <div className='col__icon_t2'>Trung tâm thương mại</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faIndustry} />
                                                <div className='col__icon_t1'>27.390 m²</div>
                                                <div className='col__icon_t2'>Trường học</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faRoad} />
                                                <div className='col__icon_t1'>600 m</div>
                                                <div className='col__icon_t2'>Mặt tiền đường chính</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faLink} />
                                                <div className='col__icon_t1'>50+</div>
                                                <div className='col__icon_t2'>Tiện ích nội khu</div>
                                            </div>
                                            <div className='col__icon'>
                                                <FontAwesomeIcon style={{ transition: 'all 500ms', fontSize: '54px' }} icon={faComment} />
                                                <div className='col__icon_t1'>50%</div>
                                                <div className='col__icon_t2'>Mật độ xây dựng</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #nganhnghe' data-bullet='false' data-link='#nganhnghe' data-title='Ngành nghề'>
                            <a name='nganhnghe' />
                        </span>
                        <section className='section duoi-mb pd-ss wh bd1' id='tong-quan-02' hidden>
                            <div className='section-content relative'>
                                <div className='row row-fluid' id='row-1527641100'>
                                    <div className='col res-w left-0 bounceInUp eds-on-scroll medium-5 small-12 large-5' style={{ margin: 'auto' }}>
                                        <div className='col-inner'>
                                            <div className='item-diathe fadeInLeft eds-on-scroll'>
                                                <h2 className='title eds-on-scroll' style={{ textAlign: 'center' }}>
                                                    <span>Trung tâm thành phố sân bay</span>
                                                </h2>
                                                <p style={{ fontSize: '15px', lineHeight: '26px' }}>
                                                    ➢ Khu đô thị Century City nằm trong quy hoạch thuộc khu quy hoạch hậu cần – logistic của sân bay, kỳ vọng
                                                    trở thành khu đô thị thương mại – dịch vụ, phục vụ nhu cầu giao thương đa dạng của các doanh nhân trong và
                                                    ngoài nước.
                                                </p>
                                                <p style={{ fontSize: '15px', lineHeight: '26px' }}>
                                                    ➢ Đây là dự án "tiên phong" đón đầu sân bay quốc tế Long Thành, vì vậy khu đô thị Century City còn được tích
                                                    hợp chuỗi tiện ích nội khu đẳng cấp và hệ thống tiện ích liên kết xứng tầm phục vụ nhu cầu trải nghiệm cuộc
                                                    sống.
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
                                                        height={574}
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
                        <span className='scroll-to' data-label='Scroll to: #vitri' data-bullet='false' data-link='#vitri' data-title='VỊ trí'>
                            <a name='vitri' />
                        </span>
                        <section className='section vitrinew pd-ss wh bd1 dark' id='vi-tri'>
                            <div className='bg section-bg fill bg-fill bg-loaded' />
                            <div className='section-content relative'>
                                <div className='row row-full-width' id='row-719012083'>
                                    <div className='col res-w left-0 cust-con bounceInDown eds-on-scroll uration6 eds-on-scroll small-12 large-12'>
                                        <div className='col-inner'>
                                            <h2 className='title' style={{ textAlign: 'center' }}>
                                                <span>VỊ TRÍ CHIẾN LƯỢC TRÊN ĐẠI LỘ THƯƠNG MẠI</span>
                                            </h2>
                                            <div className='item-diathe'>
                                                <div className='copy' style={{ textAlign: 'justify' }}>
                                                    <div className='item-diathe'>
                                                        <p style={{ textAlign: 'center' }}>
                                                            Khu đô thị
                                                            <span style={{ color: '#e67e22' }}>
                                                                <em>
                                                                    <strong> Century City</strong>
                                                                </em>
                                                            </span>
                                                            &nbsp;nằm trên hai mặt tiền đường huyết mạch của huyện Long Thành, toạ lạc ngay ĐT 769 và đường Cầu
                                                            Mên thuộc xã Bình Sơn, kết nối trực tiếp bốn tuyến giao thông trọng điểm gồm đường Vành đai 4, đường
                                                            ĐT 769 mới, quốc lộ 51, cao tốc TPHCM – Long Thành – Dầu Giây.
                                                        </p>
                                                        <p style={{ textAlign: 'center' }}>
                                                            Điểm nhấn toạ độ vàng được các nhà đầu tư đánh giá cao, liền kề khu tái định cư Lộc An - Bình Sơn
                                                            200ha, và khu công nghiệp Lộc An - Bình Sơn gần 500ha hiện đã lấp đầy 100%.
                                                        </p>
                                                        <p style={{ textAlign: 'center' }}>
                                                            Ngoài ra, dự án còn kết nối trực tiếp với
                                                            <strong>
                                                                <span style={{ color: '#e67e22' }}>đại lộ Bắc Sơn – Long Thành</span>
                                                            </strong>{' '}
                                                            và thuận tiện đến{' '}
                                                            <em>
                                                                <strong>sân bay quốc tế Long Thành</strong>
                                                            </em>
                                                            . Đây là tuyến đường thương mại kết hợp dịch vụ cao cấp và cũng là một biểu tượng hưng thịnh của
                                                            “thành phố sân bay”.
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
                                                    <img src={VITRI} alt='Vị trí dự án Century City Long Thành' className='img-fluid' />
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
                        <span className='scroll-to' data-label='Scroll to: #tienich' data-bullet='false' data-link='#tienich' data-title='tiện ích'>
                            <a name='tienich' />
                        </span>
                        <section className='section duoi-mb tanhuong tienich pt-30' id='section_1320126025'>
                            <div className='section-content relative'>
                                <div className='row row-full-width' id='row-369596245'>
                                    <div className='col cust-con bounceInDown eds-on-scroll small-12 large-12'>
                                        <div className='col-inner'>
                                            <div className='section_header'>
                                                <h2 className='title' style={{ textAlign: 'center' }}>
                                                    <span className='bg-white'>Thành phố đa tiện ích</span>
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
                                                    <p>Công viên Century Park 2ha</p>
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
                                                    <p>Trường học từ mầm non đến THCS</p>
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
                                                    <p>Trung tâm thương mại – hội nghị</p>
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
                                                    <p>Hồ Bơi</p>
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
                                                <span>Tiện ích liên kết của Century City</span>
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
                        <span className='scroll-to' data-label='Scroll to: #sanpham' data-bullet='false' data-link='#sanpham' data-title='Sản phẩm'>
                            <a name='sanpham' />
                        </span>
                        <section className='section duoi-mb pd-ss bott-0 wh' id='section_1610846969'>
                            <div className='section-content relative'>
                                <div className='row row-fluid' id='row-1280681047'>
                                    <div className='col res-w left-0 bounceInUp eds-on-scroll medium-5 small-12 large-5' style={{ margin: 'auto' }}>
                                        <div className='col-inner'>
                                            <h2 className='title' style={{ textAlign: 'center' }}>
                                                <span>PHÂN KHU CENTURY CENTER</span>
                                            </h2>
                                            <div id='PARAGRAPH474' className='ladi-element'>
                                                <p>
                                                    Toạ lạc 600 mét trên mặt tiền đường ĐT 769, bao gồm các dãy Shophouse 3 mặt tiền; TTTM và hội nghị Century
                                                    Palace 1,2ha; các dãy shop tại tầng trệt của khu căn hộ cao tầng.
                                                </p>
                                                {/* <p>
                                                    Phân khu này được bố trí các dãy shophouse cao cấp, trung tâm thương mại – hội nghị Century Palace và khu
                                                    căn hộ cao tầng với các dãy shop ở tầng trệt.{' '}
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
                                                    <span>Phân khu Century Park</span>
                                                </h2>
                                                <p>Century Park là trung tâm khu đô thị với điểm nhấn là công viên kỳ quan kiến trúc thế giới quy mô 2ha.</p>
                                                <p>
                                                    Tái hiện những kiến trúc vĩ đại nhất thế giới như Điện Kremli (Nga), đền Pantheon (Ý), nhà hát Opera Skydnye
                                                    (Úc), tháp nghiêng Pisa (Ý), tượng nữ thần Tự do (Mỹ)...
                                                </p>
                                                <p>Trò chơi vòng quay ngựa gỗ, quảng trường 12 cung hoàng đạo....</p>
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
                                                <span>PHÂN KHU CENTURY GARDEN</span>
                                            </h2>
                                            <div id='PARAGRAPH474' className='ladi-element'>
                                                <p>
                                                    Century Garden là điểm kết nối giữa Century City và khu dân cư Bình Sơn liền kề. Sở hữu hệ thống giáo dục từ
                                                    mầm non đến THCS và công viên 2.500m2, chỉ cách khu căn hộ và hội nghị Century Palace vài bước chân.
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
                                                    <span>ĐẦU TƯ MỘT LẦN – HƯỞNG LỢI TRỌN ĐỜI</span>
                                                </h2>
                                                <p>
                                                    Tọa lạc ngay trung tâm đô thị sân bay Long Thành, Century City còn là tâm điểm của 7 thành phố lớn trong
                                                    vùng kinh tế trọng điểm phía Nam và liền kề nhiều khu công nghiệp lớn như Amata, Long Thành, Bình Sơn, Lộc
                                                    An, khu công nghệ cao Techno Park Việt Nam – Hàn Quốc quy mô 300 ha….
                                                </p>
                                                <p>
                                                    Điều này kết hợp với sự hình thành của “thành phố sân bay” sẽ đảm bảo tỷ suất lợi nhuận cao và ổn định cho
                                                    các chủ nhân của Century City trong suốt thời gian sở hữu.
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
                                                <span className='bg-white'>Mẫu nhà điển hình</span>
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
                                                        <p>MẪU NHÀ LIÊN KẾ VƯỜN</p>
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
                                                        <p>Mẫu nhà phố liên kế</p>
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
                                                        <p>Mẫu nhà biệt thự</p>
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
                                                        <p>Mẫu Shophouse</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                    <Image.PreviewGroup onClick={(e) => e.preventDefault()}>
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
                                                        <p>MẪU NHÀ LIÊN KẾ VƯỜN</p>
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
                                                        <p>Mẫu nhà phố liên kế</p>
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
                                                        <p>Mẫu nhà biệt thự</p>
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
                                                        <p>Mẫu Shophouse</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    </Image.PreviewGroup>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #matbang' data-bullet='false' data-link='#matbang' data-title='Mặt bằng'>
                            <a name='matbang' />
                        </span>
                        <section className='section bd1 matbang bounceInUp eds-on-scroll' id='section_800114585'>
                            <div className='section-content relative'>
                                <div className='row' id='row-1006933714'>
                                    <div className='col small-12 large-12'>
                                        <div className='col-inner text-center'>
                                            <div className='section_header'>
                                                <h2 className='title' style={{ textAlign: 'center' }}>
                                                    <span>SƠ ĐỒ MẶT BẰNG CENTURY CITY KIM OANH</span>
                                                </h2>
                                                <div className='item-diathe pad-text' style={{ color: '#fff' }} />
                                            </div>
                                            <div style={{ color: '#fff' }} className='pad-text'>
                                                <p>
                                                    Khu đô thị
                                                    <span style={{ color: '#e67e22' }}>
                                                        <em>
                                                            <strong> Century City Kim Oanh</strong>
                                                        </em>
                                                    </span>
                                                    được xây dựng trên tổng diện tích đất
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>49,8 h</strong>a
                                                    </span>
                                                    , gồm 03 phân khu Century Center, Century Park và Century Garden. Trong đó,
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>253.980 m2</strong>
                                                    </span>{' '}
                                                    là diện tích đất ở; đất công trình giáo dục là{' '}
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>27.390 m2</strong>
                                                    </span>
                                                    ; đất công trình giáo dục{' '}
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>27.390 m2</strong>
                                                    </span>
                                                    ; đất cây xanh, còn lại{' '}
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>204.180 m2</strong>
                                                    </span>{' '}
                                                    là đất giao thông và hạ tầng kỹ thuật.
                                                </p>
                                                <p>
                                                    Tổng&nbsp;
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>2.150</strong>
                                                    </span>{' '}
                                                    sản phẩm, tổ hợp gồm các loại hình đất nền, nhà phố thương mại, nhà liền kề vườn, biệt thự&nbsp;và khu chung
                                                    cư cao tầng. Theo đó, diện tích các lô đất&nbsp;dao động từ
                                                    <span style={{ color: '#e67e22' }}>
                                                        <strong>100 m2 – 240 m2</strong>
                                                    </span>
                                                    . Cụ thể
                                                </p>
                                                <table border={1} cellPadding={1} cellSpacing={1} style={{ width: '100%' }}>
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                <strong>Loại hình</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Diện tích đất</strong>
                                                            </td>
                                                            <td>
                                                                <strong>Diện tích xây dựng</strong>
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
                                                                <strong>BIỆT THỰ</strong>
                                                            </td>
                                                            <td>240m2</td>
                                                            <td>98m2</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>NHÀ PHỐ LIỀN KỀ</strong>
                                                            </td>
                                                            <td>100m2</td>
                                                            <td>80m2</td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                <strong>NHÀ LIỀN KẾ VƯỜN</strong>
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
                        <span className='scroll-to' data-label='Scroll to: #tiendo' data-bullet='false' data-link='#tiendo' data-title='Thư viện'>
                            <a name='tiendo' />
                        </span>
                        <section className='section duoi-mb tienich thuvien' id='section_932336047'>
                            <div className='section-content relative hinhanhtiendo'>
                                <h2 className='title' style={{ textAlign: 'center' }}>
                                    <span className='bg-white'>Tiến độ dự án</span>
                                </h2>
                                <div className='row row-fuild pad-text'>
                                    <div className='medium-12'>
                                        <div style={{ textAlign: 'center', fontSize: '18px' }}>
                                            <h3>
                                                <span style={{ color: '#e67e22' }}>Tiến độ thi công dự án Century City&nbsp; (Tháng 6/2021)</span>
                                            </h3>
                                            <p>
                                                Tính đến đầu tháng 6/2021,&nbsp;Với tiến độ thi công “thần tốc”, Century City nổi bật và liên tục khẳng định sức
                                                nóng tại Long Thành. Qua 10 tháng triển khai, hiện hạ tầng dự án đã hoàn thiện hơn 80% gồm những hạng mục:
                                            </p>
                                            <p>
                                                👉 Đường nội bộ trải nhựa và thông thoáng, Lát gạch vỉa hè, cảnh quan cây xanh rộng lớn. Hệ thống đèn điện, hệ
                                                thống cấp – thoát nước. Cà phê sân vườn cũng đang được triển khai
                                            </p>
                                            <p>
                                                👉&nbsp;150 căn shophouse được ưu tiên triển khai, một số căn đang được thi công lên phần mái,&nbsp;Các kỳ quan
                                                kiến trúc thế giới đang hoàn thiện những khâu cuối cùng
                                            </p>
                                            <p>
                                                👉 Những dãy shophoue mang phong cách Châu Âu dần hoàn chỉnh,&nbsp;mảng xanh lớn dần và được phân bổ xen kẽ toàn
                                                dự án. Quảng trường 12 cung hoàng đạo, các công trình kiến trúc vỹ đại của thế giới cũng đã được trau chuốt với
                                                một diện mạo mới.
                                            </p>
                                            <p>
                                                👉 Khởi công xây dựng dự án nhà phố tại dự án Century City: Sáng nay (14/04/2021), Kim Oanh Group đã khởi công
                                                xây dựng dãy nhà phố liền kề thuộc dự án Century City. Động thái này như lời cam kết về tiến độ xây dựng dự án
                                                và tạo sự an tâm cho những khách hàng đã lựa chọn Century City.
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img alt='' height={567} src={KHOICONG14141708} width={850} />
                                            </p>
                                            <p>
                                                👉 Dự kiến, quý 3/2021, Kim Oanh Group tiến hành chuyển nhượng cho khách hàng mua dự án Century. Điều đó là minh
                                                chứng uy tín của Tập đoàn, trong bối cảnh pháp lý dự án minh bạch là ưu tiên hàng đầu của nhà đầu tư đô thị khi
                                                đưa ra quyết định&nbsp;"xuống tiền".
                                            </p>
                                            <h3>
                                                <span style={{ color: '#e67e22' }}>Chính sách dự án Century City 6/2021</span>
                                            </h3>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt='Chính sách dành cho khách hàng mua sản phẩm đất nền'
                                                    height={2120}
                                                    src={CHINHSACH03191531}
                                                    width={3989}
                                                />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt='Chính sách dành cho khách hàng mua sản phẩm nhà xây sẵn'
                                                    height={2120}
                                                    src={CHINHSACH03191521}
                                                    width={3989}
                                                />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt='Chính sách dành cho khách hàng mua sản phẩm biệt thự đất nền'
                                                    height={2120}
                                                    src={CHINHSACH03191510}
                                                    width={3989}
                                                />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt='Chính sách dành cho khách hàng mua sản phẩm biệt thự xây sẵn'
                                                    height={2120}
                                                    src={CHINHSACH03191500}
                                                    width={3989}
                                                />
                                            </p>
                                            <h3>
                                                <span style={{ color: '#e67e22' }}>Chính sách khách hàng VIP mua sỉ&nbsp;</span>
                                            </h3>
                                            <p style={{ textAlign: 'center' }}>
                                                <img alt='Chính sách khách hàng mua sỉ ' height={2120} src={CHINHSACH03191450} width={3989} />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img alt='' height={2120} src={CHINHSACH03191440} width={3989} />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img alt='' height={2120} src={CHINHSACH03191431} width={3989} />
                                            </p>
                                            <p style={{ textAlign: 'center' }}>
                                                <img
                                                    alt='Hình ảnh 1000 chuyên viên sale chụp ảnh lưu niệm ngay Cổng chính dự án Century City'
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
                                                                data-src={P551418}
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
                                                    {/* <a data-fancybox='hinhanh' data-type='image' href={P790991}> */}
                                                        <div className>
                                                            <Image
                                                                // width={1246}
                                                                // height={300}
                                                                src={P790991}
                                                                data-src={P790991}
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
                                                    {/* <a data-fancybox='hinhanh' data-type='image' href={P856793}> */}
                                                        <div className>
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
                                                    {/* <a data-fancybox='hinhanh' data-type='image' href={P301888}> */}
                                                        <div className>
                                                            <Image
                                                                // width={1246}
                                                                // height={300}
                                                                src={P301888}
                                                                data-src={P301888}
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
                               
                               </Image.PreviewGroup>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #tintuc' data-bullet='false' data-link='#tintuc' data-title='Liên hệ'>
                            <a name='tintuc' />
                        </span>
                        <section className='section'>
                            <div className='section-content relative'>
                                <div className='row row-fluid align-middle align-center'>
                                    <div id='col-150993186' className='col small-12 large-12' data-animate='fadeInUp' data-animated='true'>
                                        <div className='col-inner text-center'>
                                            <div className='container section-title-container'>
                                                <h2 className='title' style={{ textAlign: 'center' }}>
                                                    <span className='bg-white'>THẮC MẮC VỀ DỰ ÁN CENTURY CITY</span>
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
                                                                    Chủ đầu tư dự án Century City là ai?
                                                                </h3>
                                                                <div
                                                                    style={{ textAlign: 'left', paddingLeft: '5px', display: !isItemShow1 ? 'none' : '' }}
                                                                    className='content'>
                                                                    <p>Công ty Cổ phần Đầu tư và phát triển Thuận Lợi.</p>
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
                                                                    Chủ đầu tư dự án Century City là ai?
                                                                </h3>
                                                                <div
                                                                    style={{ textAlign: 'left', paddingLeft: '5px', display: !isItemShow2 ? 'none' : '' }}
                                                                    className='content'>
                                                                    <p>
                                                                        {' '}
                                                                        Giá bán đất nền 16 triệu đồng/m2. Giá nhà phố, shophouse, biệt thự vui lòng liên hệ
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
                                                                    Pháp lý dự án Century City như thế nào?
                                                                </h3>
                                                                <div
                                                                    style={{ textAlign: 'left', paddingLeft: '5px', display: !isItemShow3 ? 'none' : '' }}
                                                                    className='content'>
                                                                    <p>Pháp lý minh bạch, đã có trích lục từng nền, phê duyệt 1/500.</p>
                                                                    <p>Dự kiến quý 3/2021 chuyển nhượng sổ mang tên khách hàng.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </li>
                                                    {/* <li className='item'>
                                                        <h3>Giá bán năm 2021 là bao nhiêu?</h3>
                                                        <div className='content'>
                                                            <p>
                                                                Giá bán đất nền 16 triệu đồng/m2. Giá nhà phố, shophouse, biệt thự vui lòng liên hệ Hotline 0932
                                                                744 445
                                                            </p>
                                                        </div>
                                                    </li> */}
                                                    {/* <li className='item'>
                                                        <h3>Pháp lý dự án Century City như thế nào?</h3>
                                                        <div className='content'>
                                                            <p>Pháp lý minh bạch, đã có trích lục từng nền, phê duyệt 1/500.</p>
                                                            <p>Dự kiến quý 3/2021 chuyển nhượng sổ mang tên khách hàng.</p>
                                                        </div>
                                                    </li> */}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <span className='scroll-to' data-label='Scroll to: #lhmh' data-bullet='false' data-link='#lhmh' data-title='Liên hệ'>
                            <a name='lhmh' />
                        </span>
                    </div>
                </main>

                <footer id='footer' className='footer-wrapper'>
                    <section className='section dangkyfo' id='section_84277081'>
                        <div className='section-content relative'>
                            <h2 className='title' style={{ textAlign: 'center' }}>
                                <span className='bg-white'>ĐĂNG KÝ NHẬN THÔNG TIN</span>
                            </h2>
                            <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 25px', padding: '0 20px', color: '#222', fontSize: '17px' }}>
                                Vui lòng để lại thông tin, đội ngũ chuyên viên tư vấn của chúng tôi sẽ liên hệ, tư vấn và gửi thông tin cho quý vị trong thời
                                gian nhanh nhất
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
                                                        placeholder='Họ tên'
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
                                                        placeholder='Số điện thoại'
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
                                                        placeholder='Ghi chú liên hệ...'
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
                                                    Đăng ký
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
                                        <h4 style={{ color: '#ffc441' }}>PHÁT TRIỂN VÀ PHÂN PHỐI</h4>
                                    </div>
                                </div>
                                <div className='col medium-6 small-12 large-6'>
                                    <div className='col-inner' style={{ fontSize: '17px', lineHeight: '30px' }}>
                                        <div className='box pdtop' style={{ marginBottom: '20px' }}>
                                            <p className='contact-title'>Thông tin liên hệ</p>
                                            <h5>CÔNG TY CỔ PHẦN TẬP ĐOÀN ĐỊA ỐC KIM OANH</h5>
                                            <div className='box-content'>Địa chỉ: 355 Điện Biên Phủ, Phường 15, Quận Bình Thạnh Thành Phố Hồ Chí Minh</div>
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
                                                Đơn vị phát triển:&nbsp;
                                                <a href='https://www.congtykimoanh.vn/' target='_blank'>
                                                    Địa ốc Kim Oanh
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
                                    GIỚI THIỆU
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom px-bd'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#vitri' className='nav-top-link pd-px'>
                                    VỊ TRÍ
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom px-bd'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#tienich' className='nav-top-link pd-px'>
                                    TIỆN ÍCH
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#sanpham' className='nav-top-link pd-px'>
                                    SẢN PHẨM
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#matbang' className='nav-top-link pd-px'>
                                    MẶT BẰNG
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#tiendo' className='nav-top-link pd-px'>
                                    TIẾN ĐỘ
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#banggia' className='nav-top-link pd-px'>
                                    BẢNG GIÁ
                                </a>
                            </li>
                            <li
                                className='menu-item menu-item-type-custom menu-item-object-custom'
                                onClick={() => {
                                    setIsmenu(false)
                                }}>
                                <a href='#lhmh' className='nav-top-link pd-px'>
                                    LIÊN HỆ
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
                        display:'none'
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
                            borderRadius:'50%',
                            right:0
                        }}>
                        <FontAwesomeIcon
                            style={{ transition: 'all 500ms', fontWeight: 'bold', fontSize: '40px', textAlign: 'center',paddingLeft:'8px' }}
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
                                <img src={CROSS} className='close' id='md-close' title='Đóng' onClick={closeModal} />
                                <div className='form-inner'>
                                    <div className='form-text'>
                                        <h3 style={{ textAlign: 'center' }}>
                                            <span style={{ color: '#f94b00' }}>YÊU CẦU GỌI TƯ VẤN</span>
                                        </h3>
                                        <p style={{ textAlign: 'center' }}>
                                            ✅&nbsp; <strong>ĐẶT</strong>&nbsp;<strong>CỌC 50 TRIỆU</strong>
                                        </p>
                                        <p style={{ textAlign: 'center' }}>
                                            ✅&nbsp;
                                            <strong>
                                                CHỌN VỊ TRÍ ĐẸP CHỈ TỪ <span style={{ color: '#e74c3c' }}>16.8 TR/M2</span>
                                            </strong>
                                        </p>
                                        <p style={{ textAlign: 'center' }}>
                                            ✅&nbsp;<b>&nbsp;Tải bảng giá 200 căn đẹp hôm nay</b>
                                        </p>
                                        <p style={{ textAlign: 'center' }}>
                                            <strong>&nbsp;</strong>✅&nbsp;<strong>Quà tặng NGAY 20 chỉ SJC</strong>
                                        </p>
                                        <p style={{ textAlign: 'center' }}>
                                            <strong>Hoặc liên hệ HOTLINE:</strong>
                                        </p>
                                        <p style={{ textAlign: 'center' }}>
                                            ☎️&nbsp;&nbsp;
                                            <span style={{ fontSize: '20px' }}>
                                                <strong>
                                                    <a href='tel:0907 839 986'>0907 839 986</a>
                                                </strong>
                                            </span>
                                        </p>
                                        <input type='text' name='fullname' placeholder='Họ tên (*)' onChange={handleChange} value={data.fullname} />
                                        <input type='text' name='phone' placeholder='Số điện thoại (*)' onChange={handleChange} value={data.phone} />
                                        <textarea
                                            type='text'
                                            name='message'
                                            placeholder='Ghi chú...'
                                            rows={4}
                                            autoComplete='off'
                                            value
                                            defaultValue={''}
                                            onChange={handleChange}
                                            value={data.message}
                                        />
                                        <button onClick={handleSubmit}>
                                            Gửi thông tin <i className='fa fa-paper-plane' />
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
