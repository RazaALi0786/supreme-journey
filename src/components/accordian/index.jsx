import { useState } from "react";
import data from "./data";

export default function Accordion() {
  const [selected, setSelected] = useState(null);
  const [enableMultiSelection, setEnableMultiSelection] = useState(false);
  const [multiple, setMultiple] = useState([]);
  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }
  function handleMultiSelection(getCurrentId) {
    if (enableMultiSelection) {
      let copyMultiple = [...multiple];
      const findIndexOfCurrentId = copyMultiple.indexOf(getCurrentId);
      if (findIndexOfCurrentId === -1) {
        copyMultiple.push(getCurrentId);
      } else {
        copyMultiple.splice(findIndexOfCurrentId, 1);
      }
      setMultiple(copyMultiple);
    }
  }
  return (
    <div className="wrapper flex justify-center items-center pt-5 flex-col gap-5">
      <button
        onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        className=" px-5 py-3 bg-green-900 text-white font-bold text-xl cursor-pointer "
      >
        Enable MultiSelection
      </button>
      <div className="acoordian w-96">
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div className="item bg-green-900 mb-2 py-5 px-2">
              <div
                onClick={
                  enableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSingleSelection(dataItem.id)
                }
                className="title text-white flex justify-between items-center cursor-pointer"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {selected === dataItem.id ||
              multiple.indexOf(dataItem.id) !== -1 ? (
                <div className="content text-white h-auto">
                  {dataItem.answer}
                </div>
              ) : null}
            </div>
          ))
        ) : (
          <div>No data</div>
        )}
      </div>
    </div>
  );
}
