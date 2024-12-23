
interface ActionBtnProps{
    icon: React.ElementType,
    heading: string
}
const ActionBtn: React.FC<ActionBtnProps> = ({ icon:Icon , heading}) => {
  return (
    <button className=" flex flex-row place-items-center gap-2 text-white bg-blue-700 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-md text-sm px-2.5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
        <Icon/>
      <h2>{heading}</h2>
    </button>
  );
};

export default ActionBtn;
