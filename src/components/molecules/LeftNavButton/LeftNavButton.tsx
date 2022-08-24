import React, { useState } from 'react';
import {LeftNavButtonProps} from './LeftNavButton.props';
import './LeftNavButton.styles.css';
import {Button} from "../../atoms/Button";

interface LeftNavButton {
  name?: string; linkIcon?: string; activeObject?: string;
}

export const LeftNavButton: React.FC<LeftNavButtonProps> = ({
    leftNavBtnArr,
}) => {

  console.log("========== leftNavBtnArr", typeof(leftNavBtnArr))
  console.log("========== leftNavBtnArr", leftNavBtnArr)


  const [changeACtive, setChangeACtive] = useState<LeftNavButton>(
     { activeObject: 'null'}
  );
  const handleNavLeftBtn = (index: number) => {
    console.log("leftNavBtnArr", {...leftNavBtnArr});
    console.log("changeACtive", changeACtive);
    // setChangeACtive({...leftNavBtnArr, });
  }

  return (
      <div className="button-section-group fixed">
        {
            leftNavBtnArr?.map((btn:any, index) =>  <Button key={index} onClick={() =>handleNavLeftBtn(btn.id)} title={btn.name} linkIcon={btn.linkIcon } />)
        }
      </div>
  );
};
