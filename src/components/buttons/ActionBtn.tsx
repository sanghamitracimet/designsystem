import { ActionBtnProps } from "@/utils/types";


const ActionBtn: React.FC<ActionBtnProps> = ({ icon:Icon , heading, onClick}) => {
  return (
    <button className=" flex flex-row place-items-center gap-2 text-white bg-blue hover:bg-darkBlue focus:ring-1 focus:ring-darkBlue font-medium rounded-md text-sm px-2.5 py-2.5 dark:bg-blue dark:hover:bg-darkBlue focus:outline-none dark:focus:ring-darkBlue"
    onClick={onClick}>
        <Icon/>
      <h2 className="text-white text-nowrap">{heading}</h2>
    </button>
  );
};

export default ActionBtn;
