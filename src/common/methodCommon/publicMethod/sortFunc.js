export const fnSortFunc = (api = []) => {
  const oSideMenuObj = {};
  let sNowClassify = "";
  let sNowClassify2 = "";
  api.forEach((item) => {
    //先判斷有無第二層title//
    if (item.menuClassify2Name === "" && item.menuClassify2 === "1") {
      //沒有第二層title
      //先組大項1:臺幣、2:外幣、3:黃金存摺、4:基金/信託、5:理財保險、6:信用卡、7:申辦專區、8:其他
      if (item.menuClassify !== sNowClassify) {
        oSideMenuObj[`classify${item.menuClassify}`] = [];
        sNowClassify = item.menuClassify;
      }
      oSideMenuObj[`classify${item.menuClassify}`].push({});
      //把功能所有key、value塞入物件
      for (let key in item) {
        oSideMenuObj[`classify${item.menuClassify}`][
          oSideMenuObj[`classify${item.menuClassify}`].length - 1
        ][key] = item[key];
      }
    } else {
      //先組大項1:臺幣、2:外幣、3:黃金存摺、4:基金/信託、5:理財保險、6:信用卡、7:申辦專區、8:其他
      if (item.menuClassify !== sNowClassify) {
        oSideMenuObj[`classify${item.menuClassify}`] = {};
        sNowClassify = item.menuClassify;
      }
      //例外判斷如果該有menuClassify2Name但是是空值的話不塞入物件
      if (item.menuClassify2Name !== "") {
        //第二層title
        if (item.menuClassify2 !== sNowClassify2) {
          oSideMenuObj[`classify${item.menuClassify}`][
            `classify${item.menuClassify}${item.menuClassify2}`
          ] = [];
          sNowClassify2 = item.menuClassify2;
        }
        oSideMenuObj[`classify${item.menuClassify}`][
          `classify${item.menuClassify}${item.menuClassify2}`
        ].push({});
        //把功能所有key、value塞入物件
        for (let key in item) {
          oSideMenuObj[`classify${item.menuClassify}`][
            `classify${item.menuClassify}${item.menuClassify2}`
          ][
            oSideMenuObj[`classify${item.menuClassify}`][
              `classify${item.menuClassify}${item.menuClassify2}`
            ].length - 1
          ][key] = item[key];
        }
      }
    }
  });
  return oSideMenuObj;
};

export const fnSortTitle = (api = []) => {
  const oTitleMap = {};
  let sNowClassify = "";
  let sNowClassify2 = "";
  //塞入title map
  api.forEach((item) => {
    //先判斷有無第二層title
    if (item.menuClassify2Name === "" && item.menuClassify2 === "1") {
      //沒有第二層title
      //先塞大項title
      if (item.menuClassify !== sNowClassify) {
        oTitleMap[`classify${item.menuClassify}`] = item.menuClassifyName;
      }
    } else {
      //先塞大項title
      if (item.menuClassify !== sNowClassify) {
        oTitleMap[`classify${item.menuClassify}`] = item.menuClassifyName;
        sNowClassify = item.menuClassify;
      }
      //例外判斷如果該有menuClassify2Name但是是空值的話不塞入
      if (item.menuClassify2Name !== "") {
        //塞入第二層title
        if (item.menuClassify2 !== sNowClassify2) {
          oTitleMap[`classify${item.menuClassify}${item.menuClassify2}`] =
            item.menuClassify2Name;
          sNowClassify2 = item.menuClassify2;
        }
      }
    }
  });
  console.log(oTitleMap);
  return oTitleMap;
};
