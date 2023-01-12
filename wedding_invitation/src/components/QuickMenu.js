/* eslint-disable */

function QuickMenu() {
  const kakaolink_send_test = () => {
    console.log(`something3`);
  };

  const kakaolink_send = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '저희 결혼합니다. < 김동진 & 박찬민 >',
        description:
          '#2월 18일 #양재 영일교회 #김동진 & 박찬민 #간편한 카카오톡 청첩장 #카톡전용 ',
        imageUrl:
          'http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png',
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl: 'http://localhost:3000',
          webUrl: 'http://localhost:3000',
        },
      },
      buttons: [
        {
          title: '카카오톡으로 보기',
          link: {
            mobileWebUrl: 'http://localhost:3000',
            webUrl: 'http://localhost:3000',
          },
        },
        {
          title: '예식장 지도 바로 가기',
          link: {
            mobileWebUrl: 'https://place.map.kakao.com/8485979',
            webUrl: 'https://place.map.kakao.com/8485979',
          },
        },
      ],
    });
  };

  return (
    <div className="pop">
      <a
        href="#"
        onClick={kakaolink_send(
          '김동진 ♥ 박찬민, 결혼합니다!',
          '2023년 2월 18일 토요일 오전 11시 양재역 영일교회',
          'https://ever-ever-after-chanmin-n-dongjin-kjwejeaqf-charmingpark.vercel.app'
        )}
      >
        카카오톡 으로 공유하기
        {/* TODO: 카톡으로 URL공유 버튼으로 만들지, 연락처를 바로 가는 버튼으로 만들지 결정하기.  */}
      </a>
    </div>
  );
}

export default QuickMenu;
