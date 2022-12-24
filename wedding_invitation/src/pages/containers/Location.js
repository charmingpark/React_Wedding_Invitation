function Location() {
  return (
    <section className="locationWrap atm" id="locationWrap">
      <div className="locationInner">
        <div className="secTitleWrap t1">
          <h2 className="hanTit ranTxt top">오시는 길</h2>
          <p className="mt">오시는 길을 안내합니다.</p>
        </div>
        {/* <!-- mapWrap 카카오지도 --> */}
        <div className="mapWrap"></div>
        {/* <!-- //mapWrap --> */}

        {/* <!-- addrWrap 주소복사 --> */}
        {/*  */}
        <div className="addrWrap">
          <div className="box">
            <em className="addr">서울 서초구 바우뫼로41길 67</em>
            <button
              className="btn copy03"
              data-clipboard-text="서울 서초구 바우뫼로41길 67"
            ></button>
          </div>
          <div className="box">
            <span className="label">식장 안내</span>
            {/* style="text-align: right" */}
            <strong className="hall">양재 영일교회 본당</strong>
          </div>
          {/* 버튼을 누르면 팝업창으로 약도 띄우기 */}
          <button className="roughMap">주차안내</button>
        </div>
        {/* <!-- //addrWrap --> */}
        {/* <!-- infoLoca --> */}
        <div className="infoLoca">
          <div className="inner">
            <div className="box">
              <h3 className="tit01">내비게이션</h3>
              <p className="tit02">
                원하시는 앱을 선택하시면 길안내가 시작됩니다.
              </p>
              <ul>
                <li>
                  <a href="https://surl.tmap.co.kr/2ba3cba6" className="tmap">
                    티맵
                  </a>
                </li>
                <li>
                  <a href="http://naver.me/GOOSYb2Q" className="navermap">
                    네이버지도
                  </a>
                </li>
                <li>
                  <a href="http://kko.to/3fw4D_H-77" className="kakaomap">
                    카카오맵
                  </a>
                </li>
              </ul>
            </div>
            <div className="box">
              <h3 className="tit01">주차안내</h3>
              <p className="tit02">
                교회 주변 도로에 주차하시지 마시고,
                <br />
                <button data-clipboard-text="서울 서초구 남부순환로 2636">
                  성문 주차장
                </button>
                을 이용해 주시기 바랍니다.
                <button data-clipboard-text="서울 서초구 남부순환로 2636">
                  (성문빌딩 주차장)
                  <br />
                  서울 서초구 남부순환로 2636
                  <br />
                </button>
              </p>
            </div>
            <div className="station_wayout">
              <button className="이걸_누르면_지하철역_정보_보여주기">
                <h4 className="tit_findway">지하철역</h4>
              </button>
            </div>
            <div className="station_ride check_list">
              <button className="이걸_누르면_버스정류장_정보_보여주기">
                <h4 className="tit_findway">버스정류장</h4>
              </button>
            </div>
          </div>
        </div>
      </div>
      <ul className="지하철역_정보_보여주기 popContainer">
        <li>
          <em className="txt_station">
            <a
              href="https://map.kakao.com?subwayId=SES0332"
              className="link_station"
              data-logtarget=""
              data-logevent="waytogo,subway"
            >
              양재역
            </a>
          </em>
          <span className="ico_traffic seoul_line3_small">3호선</span>
          {/* <!-- 호선별 대체 텍스트 부탁 드립니다. --> */}
          <span className="ico_traffic shinbundang_line_small">신분당선</span>
          {/* <!-- 호선별 대체 텍스트 부탁 드립니다. --> */}
          <span className="bg_bar">|</span>
          <span className="txt_wayout">
            <span className="num_wayout">8</span>번 출구
            <span className="num_wayout txt_walk">도보 7분</span>
          </span>
        </li>
        <li>
          <em className="txt_station">
            <a
              href="https://map.kakao.com?subwayId=SES0333"
              className="link_station"
              data-logtarget=""
              data-logevent="waytogo,subway"
            >
              매봉역
            </a>
          </em>
          <span className="ico_traffic seoul_line3_small">3호선</span>
          {/* <!-- 호선별 대체 텍스트 부탁 드립니다. --> */}
          <span className="bg_bar">|</span>
          <span className="txt_wayout">
            <span className="num_wayout">4</span>번 출구
            <span className="num_wayout txt_walk">도보 13분</span>
          </span>
        </li>
      </ul>
      <div className="버스정류장_정보_보여주기 popContainer">
        <div className="ride_wayout">
          {/* <!-- 지도에서 일치하는 정류장에 마우스 오버 했을 때 클래스 ride_on 추가 --> */}
          <strong className="tit_wayout">
            <a
              href="https://map.kakao.com?busStopId=BS115993"
              className="link_wayout"
              data-logtarget=""
              data-logevent="waytogo,busstop"
            >
              <span className="txt_busstop">원불교</span>
              <span className="txt_number">
                <span className="screen_out">정류장 번호:</span>(22743)
                <span className="bg_bar">|</span>
                <span className="screen_out">거리:</span>
                199m
              </span>
            </a>
          </strong>
          <ul className="list_ride">
            <li>
              <em className="ico_traffic bus_town">마을</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  강남10<span className="bg_bar">|</span>서초18
                  <span className="bg_bar">|</span>서초21
                </span>
                <a
                  href="https://map.kakao.com?busStopId=BS115993"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="ride_wayout">
          {/* <!-- 지도에서 일치하는 정류장에 마우스 오버 했을 때 클래스 ride_on 추가 --> */}
          <strong className="tit_wayout">
            <a
              href="https://map.kakao.com?busStopId=11230671005"
              className="link_wayout"
              data-logtarget=""
              data-logevent="waytogo,busstop"
            >
              <span className="txt_busstop">양재노인종합복지관</span>
              <span className="txt_number">
                <span className="screen_out">정류장 번호:</span>(22271)
                <span className="bg_bar">|</span>
                <span className="screen_out">거리:</span>
                205m
              </span>
            </a>
          </strong>
          <ul className="list_ride">
            <li>
              <em className="ico_traffic bus_blue">간선</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  463<span className="bg_bar">|</span>641
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11230671005"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
            <li>
              <em className="ico_traffic bus_green">지선</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  4211<span className="bg_bar">|</span>4312
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11230671005"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="ride_wayout">
          {/* <!-- 지도에서 일치하는 정류장에 마우스 오버 했을 때 클래스 ride_on 추가 --> */}
          <strong className="tit_wayout">
            <a
              href="https://map.kakao.com?busStopId=BS68170"
              className="link_wayout"
              data-logtarget=""
              data-logevent="waytogo,busstop"
            >
              <span className="txt_busstop">양재역</span>
              <span className="txt_number">
                <span className="screen_out">정류장 번호:</span>(23827)
                <span className="bg_bar">|</span>
                <span className="screen_out">거리:</span>
                220m
              </span>
            </a>
          </strong>
          <ul className="list_ride">
            <li>
              <em className="ico_traffic bus_airport">공항</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">6009</span>
                <a
                  href="https://map.kakao.com?busStopId=BS68170"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="ride_wayout">
          {/* <!-- 지도에서 일치하는 정류장에 마우스 오버 했을 때 클래스 ride_on 추가 --> */}
          <strong className="tit_wayout">
            <a
              href="https://map.kakao.com?busStopId=11230671016"
              className="link_wayout"
              data-logtarget=""
              data-logevent="waytogo,busstop"
            >
              <span className="txt_busstop">원불교앞</span>
              <span className="txt_number">
                <span className="screen_out">정류장 번호:</span>(23322)
                <span className="bg_bar">|</span>
                <span className="screen_out">거리:</span>
                229m
              </span>
            </a>
          </strong>
          <ul className="list_ride">
            <li>
              <em className="ico_traffic bus_blue">간선</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">463</span>
                <a
                  href="https://map.kakao.com?busStopId=11230671016"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
            <li>
              <em className="ico_traffic bus_green">지선</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  4211<span className="bg_bar">|</span>4312
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11230671016"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
            <li>
              <em className="ico_traffic bus_town">마을</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  강남10<span className="bg_bar">|</span>서초18
                  <span className="bg_bar">|</span>서초21
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11230671016"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="ride_wayout">
          {/* <!-- 지도에서 일치하는 정류장에 마우스 오버 했을 때 클래스 ride_on 추가 --> */}
          <strong className="tit_wayout">
            <a
              href="https://map.kakao.com?busStopId=BS68158"
              className="link_wayout"
              data-logtarget=""
              data-logevent="waytogo,busstop"
            >
              <span className="txt_busstop">양재역</span>
              <span className="txt_number">
                <span className="screen_out">정류장 번호:</span>(23841)
                <span className="bg_bar">|</span>
                <span className="screen_out">거리:</span>
                249m
              </span>
            </a>
          </strong>
          <ul className="list_ride">
            <li>
              <em className="ico_traffic bus_airport">공항</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">6009</span>
                <a
                  href="https://map.kakao.com?busStopId=BS68158"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="ride_wayout">
          {/* <!-- 지도에서 일치하는 정류장에 마우스 오버 했을 때 클래스 ride_on 추가 --> */}
          <strong className="tit_wayout">
            <a
              href="https://map.kakao.com?busStopId=11230661017"
              className="link_wayout"
              data-logtarget=""
              data-logevent="waytogo,busstop"
            >
              <span className="txt_busstop">양재역말죽거리.강남베드로병원</span>
              <span className="txt_number">
                <span className="screen_out">정류장 번호:</span>(23318)
                <span className="bg_bar">|</span>
                <span className="screen_out">거리:</span>
                273m
              </span>
            </a>
          </strong>
          <ul className="list_ride">
            <li>
              <em className="ico_traffic bus_blue">간선</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  402<span className="bg_bar">|</span>406
                  <span className="bg_bar">|</span>N37
                  <span className="txt_bustype">(심야)</span>
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11230661017"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
            <li>
              <em className="ico_traffic bus_green">지선</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  3420<span className="bg_bar">|</span>4312
                  <span className="bg_bar">|</span>4319
                  <span className="bg_bar">|</span>4433
                  <span className="bg_bar">|</span>4435
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11230661017"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
            <li>
              <em className="ico_traffic bus_metroplice">광역</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">M6439</span>
                <a
                  href="https://map.kakao.com?busStopId=11230661017"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
            <li>
              <em className="ico_traffic bus_normal">일반</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  11-3<span className="bg_bar">|</span>6
                  <span className="bg_bar">|</span>917
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11230661017"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
            <li>
              <em className="ico_traffic bus_direct">직행</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  3200<span className="bg_bar">|</span>3300
                  <span className="bg_bar">|</span>3400
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11230661017"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="ride_wayout">
          {/* <!-- 지도에서 일치하는 정류장에 마우스 오버 했을 때 클래스 ride_on 추가 --> */}
          <strong className="tit_wayout">
            <a
              href="https://map.kakao.com?busStopId=BS115990"
              className="link_wayout"
              data-logtarget=""
              data-logevent="waytogo,busstop"
            >
              <span className="txt_busstop">양재전화국</span>
              <span className="txt_number">
                <span className="screen_out">정류장 번호:</span>(23856)
                <span className="bg_bar">|</span>
                <span className="screen_out">거리:</span>
                273m
              </span>
            </a>
          </strong>
          <ul className="list_ride">
            <li>
              <em className="ico_traffic bus_town">마을</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">강남07</span>
                <a
                  href="https://map.kakao.com?busStopId=BS115990"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
        <div className="ride_wayout">
          {/* <!-- 지도에서 일치하는 정류장에 마우스 오버 했을 때 클래스 ride_on 추가 --> */}
          <strong className="tit_wayout">
            <a
              href="https://map.kakao.com?busStopId=11220661030"
              className="link_wayout"
              data-logtarget=""
              data-logevent="waytogo,busstop"
            >
              <span className="txt_busstop">양재역.양재1동민원분소</span>
              <span className="txt_number">
                <span className="screen_out">정류장 번호:</span>(22270)
                <span className="bg_bar">|</span>
                <span className="screen_out">거리:</span>
                279m
              </span>
            </a>
          </strong>
          <ul className="list_ride">
            <li>
              <em className="ico_traffic bus_blue">간선</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  402<span className="bg_bar">|</span>406
                  <span className="bg_bar">|</span>641
                  <span className="bg_bar">|</span>N37
                  <span className="txt_bustype">(심야)</span>
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11220661030"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
            <li>
              <em className="ico_traffic bus_green">지선</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  3420<span className="bg_bar">|</span>4312
                  <span className="bg_bar">|</span>4319
                  <span className="bg_bar">|</span>4433
                  <span className="bg_bar">|</span>4435
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11220661030"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
            <li>
              <em className="ico_traffic bus_normal">일반</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">
                  11-3<span className="bg_bar">|</span>6
                  <span className="bg_bar">|</span>917
                </span>
                <a
                  href="https://map.kakao.com?busStopId=11220661030"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
            <li>
              <em className="ico_traffic bus_direct">직행</em>
              {/* <!-- 버스 선별로 대체 텍스트 부탁 드립니다. --> */}
              <div className="bus_ride">
                <span className="num_ride">G7426</span>
                <a
                  href="https://map.kakao.com?busStopId=11220661030"
                  className="btn_more hide"
                  data-logtarget=""
                  data-logevent="waytogo,busstop_more"
                >
                  <span className="ico_comm ico_more">더보기</span>
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Location;
