const Kakaolink = () => {
  const handleShareBtn = () => {
    window.Kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: '저희 결혼합니다.',
        description:
          '#from.김동진&박찬민 #2월18일 #양재영일교회 #DIY청첩장 #카톡전용',
        imageUrl: 'https://ifh.cc/g/2WCQ4w.jpg',
        link: {
          // [내 애플리케이션] > [플랫폼] 에서 등록한 사이트 도메인과 일치해야 함
          mobileWebUrl:
            'https://ever-ever-after-chanmin-n-dongjin-r9wiu0cv9-charmingpark.vercel.app',
          webUrl:
            'https://ever-ever-after-chanmin-n-dongjin-r9wiu0cv9-charmingpark.vercel.app',
        },
      },
      buttons: [
        {
          title: '청첩장 보기',
          link: {
            mobileWebUrl: 'https://developers.kakao.com',
            webUrl: 'https://developers.kakao.com',
          },
        },
      ],
    });
  };

  return (
    <button className="creater" onClick={handleShareBtn}>
      카카오톡으로 공유하기
    </button>
  );
};

export default Kakaolink;
