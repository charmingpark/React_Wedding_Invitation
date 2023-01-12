import { LocationStyle } from './Location.style.js';
import KakaoMap from '../../components/KakaoMap.js';
import Clipboard from 'clipboard';

import { useState, useEffect, useRef, forwardRef } from 'react';
import Popover from '@mui/material/Popover';

const Location = forwardRef((props, ref) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const timeoutRef = useRef(null);

  const handleClick = (event) => {
    timeoutRef.current = setTimeout(() => {
      setAnchorEl(null);
    }, 1500);
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
    clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const clipboard = new Clipboard('.addrCopy');
  clipboard.on('success', function (e) {
    console.log('Action:', e.action);
    console.log('Text:', e.text);
    console.log('Trigger:', e.trigger);

    e.clearSelection();
  });

  clipboard.on('error', function (e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
  });
  return (
    <section
      className="locationWrap atm"
      id="locationWrap"
      ref={(inputEl) => (ref.current[ref.current.length] = inputEl)}
    >
      <LocationStyle>
        <div className="locationInner">
          <div className="secTitleWrap t1">
            <h2 className="hanTit ranTxt top">오시는 길</h2>
          </div>

          {/* <!-- mapWrap 카카오지도 --> */}
          <div className="mapWrap">
            <ul className="addr">
              <li>
                <h3>
                  <b>영일교회</b>
                  <button
                    className="addrCopy"
                    data-clipboard-text="서울 서초구 바우뫼로41길 67 영일교회"
                    aria-describedby={id}
                    onClick={handleClick}
                  >
                    예식장
                    <br />
                    주소 복사
                  </button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    // sx={{ p: 1 }}
                  >
                    <span>복사되었습니다.</span>
                  </Popover>
                </h3>
                <p>서울 서초구 바우뫼로41길 67 </p>
              </li>
              <li>
                <h3>
                  <b>성문주차장</b>
                  <button
                    className="addrCopy"
                    data-clipboard-text="서울 서초구 남부순환로 2636 성문주차장"
                    aria-describedby={id}
                    onClick={handleClick}
                  >
                    주차장
                    <br />
                    주소 복사
                  </button>
                  <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'center',
                    }}
                    transformOrigin={{
                      vertical: 'top',
                      horizontal: 'center',
                    }}
                    // sx={{ p: 1 }}
                  >
                    <span>복사되었습니다.</span>
                  </Popover>
                </h3>
                <p>서울 서초구 남부순환로 2636</p>
              </li>
            </ul>
            <KakaoMap />
            {/* <!-- //mapWrap --> */}
          </div>
        </div>
      </LocationStyle>
    </section>
  );
}); //함수 닫는 괄호 잊지 마세요!

Location.displayName = 'Location';

export default Location;
