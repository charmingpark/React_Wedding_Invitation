/* eslint-disable */

function QuickMenu() {

  //var g5_url = 'https://developers.kakao.com/'; //원래 다다단플젝 url


  const kakaolink_send = () => {
    console.log(`something3`)
  }

  // const kakaolink_send = (title, description, image) => {
  //   if (!g5_url || !site_name || !is_offical) {
  //     //alertOpen_skin('미리보기에서는 사용하실 수 없습니다.')
  //     //return false;
  //     site_name = 'test';
  //   }

  //   if (image === undefined) {
  //     image = '';
  //   }

  //   // 카카오톡 링크 버튼을 생성합니다. 처음 한번만 호출하면 됩니다.
  //   const navLink = encodeURIComponent($('.btnNav a').attr('href'));
  //   //console.log( g5_url+'/gotoNav.php?url='+navLink );
  //   try {
  //     var kakaoButtons = [
  //       {
  //         title: '지금 확인하기', // 버튼 제목
  //         link: {
  //           mobileWebUrl: location.href, // 모바일 카카오톡에서 사용하는 웹 링크 URL
  //           webUrl: location.href, // PC버전 카카오톡에서 사용하는 웹 링크 URL
  //         },
  //       },
  //     ];

  //     if (document.getElementById('ca_name').value != '인사장') {
  //       kakaoButtons.push({
  //         title: '위치 보기',
  //         link: {
  //           mobileWebUrl: g5_url + '/gotoNav.php?url=' + navLink,
  //           webUrl: g5_url + '/gotoNav.php?url=' + navLink,
  //         },
  //       });
  //     }

  //     Kakao.Link.sendDefault({
  //       objectType: 'feed',
  //       content: {
  //         title: String(title),
  //         description: description,
  //         imageUrl: image,
  //         link: {
  //           mobileWebUrl: location.href,
  //           webUrl: location.href, // 앱 설정의 웹 플랫폼에 등록한 도메인의 URL이어야 합니다.
  //         },
  //       },
  //       buttons: kakaoButtons,
  //     });
  //   } catch {
  //     alert('로딩중입니다. 잠시후에 다시 시도해 주세요.');
  //   }
  // };

  const kakaolink_send2 = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '딸기 치즈 케익',
        description: '#케익 #딸기 #삼평동 #카페 #분위기 #소개팅',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: 'http://localhost:3000',
          webUrl: 'http://localhost:3000',
        },
      },
      social: {
        likeCount: 286,
        commentCount: 45,
        sharedCount: 845,
      },
      buttons: [
        {
          title: '웹으로 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
        {
          title: '앱으로 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
      ],
    });
  };

  return (
    <div className="QuickMenu">
      {/* <!-- QuickMenu - 우측, 하단 퀵메뉴 (화면 비율에 따라 변함) --> */}
      {/* <!-- linkList --> */}
      <div className="linkList">
        <ul>
          <li className="sound btnControl">
            <a className="ico" href="#">
              사운드
            </a>
            {/* 접근성: pop은 아이콘 설명이 좌측으로 부가적으로 뜨는 부분 */}
            <div className="pop">
              <a href="#">BGM off</a>
            </div>
            <div className="audioWrap">
              {/* <audio id="BgmAudio" autoPlay="" loop="" preload="auto">
                <source src="something.mp3" type="audio/mp3" />
              </audio> */}
            </div>
          </li>
          <li id="Btn_kakaoLink" className="kakao">
            <a
              className="ico"
              href="#"
              //onClick={kakaolink_send('박찬민 ♥ 김동진, 결혼합니다!','2023년 2월 18일 토요일 오전 11시 \양재역 영일교회','https://wedding.jpg')}
            >
              카카오
            </a>
            {/* 접근성: pop은 아이콘 설명이 좌측으로 부가적으로 뜨는 부분 */}
            <div className="pop">
              <a
                href="#"
                //onClick={kakaolink_send('박찬민 ♥ 김동진, 결혼합니다!','2023년 2월 18일 토요일 오전 11시 \양재역 영일교회','https://wedding.jpg(날짜 강조형 썸네일) ')}
              >
                카카오톡 으로 공유하기
                {/* TODO: 카톡으로 URL공유 버튼으로 만들지, 연락처를 바로 가는 버튼으로 만들지 결정하기.  */}
              </a>
            </div>
          </li>
          <li id="Btn_kakaoMap" className="map">
            <a className="ico" href="#">
              지도
            </a>
            {/* 접근성: pop은 아이콘 설명이 좌측으로 부가적으로 뜨는 부분 */}
            <div className="pop">
              <a href="#">지도</a>
            </div>
          </li>
        </ul>
      </div>
      {/* <!-- //linkList --> */}

      {/* <!-- control (데스크탑에서만 보이는 fullPage 화살표 버튼) --> */}
      <div className="control">
        <a href="#" className="btnTop">
          위로 가기
        </a>
        <a href="#" className="btnDown">
          아래로 가기
        </a>
        <button onClick={kakaolink_send2}>
        카카오톡 공유 보내기 버튼
        </button>
      </div>
      {/* <!-- //control --> */}
    </div>
  );
}

export default QuickMenu;
