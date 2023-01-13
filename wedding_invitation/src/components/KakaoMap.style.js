import styled from 'styled-components';

export const KakaoMapStyle = styled.div`
  width: 100vw; //지도 컨테이너 크기
  height: 40vh; //지도 컨테이너 넓이
  margin: 0 auto;
  background-color: #ccc;
  border-radius: 1em;

  > div {
    width: 100%;
    height: 100%;
  }

  .customoverlay a {
    display: block;
    text-decoration: none;
    color: #000;
    text-align: center;
    border-radius: 6px;
    font-size: 14px;
    font-weight: bold;
    overflow: hidden;
    background: #d95050;
    background: #d95050
      url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png)
      no-repeat right 14px center;
  }

  .customoverlay {
    transform: translate(2px, -130%); //말풍선(장소 타이틀) 위치 조정
    box-shadow: 0 2px 1px 0 rgba(0, 0, 0, 0.1);
  }

  .customoverlay:after {
    content: '';
    position: absolute;
    margin-left: -12px;
    left: 50%;
    bottom: -12px;
    width: 22px;
    height: 12px;
    background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png');
  }

  .customoverlay .title {
    display: block;
    text-align: center;
    background: #fff;
    margin-right: 35px;
    padding: 10px 15px;
    font-size: 14px;
    font-weight: bold;
  }
`;
