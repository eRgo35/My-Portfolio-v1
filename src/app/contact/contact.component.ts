import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private renderer: Renderer2) {
    this.renderer.setStyle(document.getElementById("root"), 'background', '#171717');
    this.renderer.removeClass(document.getElementById("menu"), 'menuAboutTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeAboutTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuHobbiesTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeHobbiesTab');
    this.renderer.removeClass(document.getElementById("menu"), 'menuProjectsTab');
    this.renderer.removeClass(document.getElementById("home"), 'homeProjectsTab');
    this.renderer.addClass(document.getElementById("menu"), 'menuContactTab');
    this.renderer.addClass(document.getElementById("home"), 'homeContactTab');
  }

  ngOnInit() {
  }

  i() {
    this.renderer.addClass(document.getElementById('home'), `
    -----BEGIN PGP MESSAGE-----

    hQGMA2CXEZIJTPBQAQv+PP++QSiD5emq1jk1ntSo2zikDM/BN5s4Miv4LlT03d5l
    qMZNrkdMK5tUjudK0wxQD1xnGlzvzg78LT7aXhl4k5nraRdVy9AoW13PkeMafahU
    PTgvV61lisddRlPDiTsKJgUuuYfMUlcImyqQUhlWuceYDbAMEMkGiKY/vivCgzOR
    zDKwiMi3vLF19Y03cywXDYILImM2Hc6/pRcvYWkZDDQUL8Nb4+EcJ6NqYRBe3DwC
    T7TBwJ6muUrzTgnclibVnVJC2NYX9SQmGGeDRMwPfDB27bqCCx2BECjbx6t0vmIZ
    P9mF1XZf1eCWHvWNA5rdxKeKcji2ilrAp4Ku0K8lzYFrL5Of6nOie586XlR3KC3B
    iGv//2REyChwidOWw0x+PYdaXLPTCPVATyobAt4ONAfIGJ7TuuUkUAE8a7Msu65r
    hESZTJpsz+iCmDTsZXmLPK/UnYnaCUQSvrC46j+RlQl9RFOkvXGl6Xrz4rNFX/bv
    cxivhLBpLezCWtcz5cgS0ukBJMTzT/79Cu2RYg80TmzJXNu0FTdNffcsWpmpVkJ9
    FzICsf6XaPzL8MtROcT64ldNm4lgRXof9SeIpx89pGMk4ABuDg37amzvFbx8JxCm
    17FpEG4jVvOg4WrZueOfL6ytITAaquHrl2Oel/zdrMn9b0hMUlGgC/jrkAVp7pBP
    8+qFHwBryiOfiKWiIefbIhnyeWvRW3rMtnnkXEqfjuKj6HqEQ4x1sLqPMuMtserj
    Ucv4r4S/I4aaCIQZQTwzq0yjb6IOZmFlGwO7jVHdZQyVI/kDp/cecZQdkClKIb4T
    iqHMMuefbIeEzDc/cquvKfuRzF1NW/Bhgur1FtcgAcx2zD9t8YQ5pztWnQPg0JDx
    2c3jl3PAEv+sDRQ/1xo1sDySOWEFxgauZxJTRvDBAkMPy2WhjTKDkAQbN0NctzHy
    FBizKn40iC8mtmf1G3YVVo7fVJtRdAU0umltZUVX1YaO8SH/32RBvx3CYoLkPmlC
    o5MFtc8VcAJ6Gdi9pPd+Tc5ov/BPFIZBYJL2dBkaFsAYB7w8dz0usURjokOZizQs
    wZ8ntHrsL1qr6uFypuZO+wmjLE28cUex/qLNOQBxq4ZWdU02oaNygBStPWY3iORq
    2xMW4lY9bpjCSUh9LEqy28WQh57ZSkr56Lnbvtz/k+YO8unUFFTNh1gwz9JUTMlb
    P8Ahs03P5HcP+6wjym+B1dSaUbwcH3BSqeOUn9fB4o5ie/c0CVp43Azj4+j9KsVO
    93yduwRJ9ubhWZAkOu0JPdVPc6NQjUxpGgBUA78fFxs1IwLG8g38wkHSecYZsB/g
    QAnL0wltb/z/4ChI+bevEz2YVWIrSWgC4p7yJYv/QXrVLJkvGc4Ktrixw2f6NYXa
    RsAqwYpJpqBBkx3mqmu3ELfz87Y5HdUAlqdGDXo9ILj6mfrbsFgVd+83Ggj059zN
    KVl6JXgFgj6rRV0V5NkOgEa1n/lIEwfcjc/PI/qKlbwBaI5P
    =JdSH
    -----END PGP MESSAGE-----`)
  }

}
