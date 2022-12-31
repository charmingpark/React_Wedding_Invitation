import { KakaoMapStyle } from './KakaoMap.style.js';
import { Map, MapMarker, CustomOverlayMap } from 'react-kakao-maps-sdk';

const KakaoMap = () => {
  const positions = [
    {
      title: '주차장 (성문 빌딩)',
      latlng: { lat: 37.485018403113, lng: 127.03905414338 },
      link: 'http://kko.to/8ZxRqjiW6y',
    },
    {
      title: '식장 (영일 교회)',
      latlng: { lat: 37.483396582516, lng: 127.03998022798 },
      link: 'http://kko.to/_hQaHbYq2t',
    },
  ];

  return (
    <KakaoMapStyle>
      <Map
        center={{
          // 지도의 중심좌표
          lat: 37.485,
          lng: 127.039298,
        }}
        level={5}
      >
        {/* 지도의 확대 레벨 (작을 수록 크게 보입니다) */}
        {positions.map((position) => (
          <>
            <MapMarker
              key={`${position.title}-${position.latlng}-marker`}
              position={position.latlng} // 마커를 표시할 위치
              image={{
                //이미지를 안 넣으려면 이 image 프로퍼티를 전부 제거하세요
                src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
                size: {
                  width: 24,
                  height: 35,
                }, // 마커이미지의 크기입니다
              }}
              title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
            />
            <CustomOverlayMap
              key={`${position.title}-${position.latlng}-overlay`}
              position={position.latlng}
              yAnchor={1}
            >
              <div className="customoverlay">
                <a href={position.link} target="_blank" rel="noreferrer">
                  <span className="title">{position.title}</span>
                </a>
              </div>
            </CustomOverlayMap>
          </>
        ))}
      </Map>
    </KakaoMapStyle>
  );
};

export default KakaoMap;
