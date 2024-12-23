export const BtnStatusSelector = (status: string) => {
    let color: string;
    switch (status) {
      case "Approval":
        color = "bg-off-blue"; 
        break;
      case "Sign":
        color = "bg-off-pink";
        break;
      case "Briefing":
        color = "bg-sky-blue";
        break;
      case "Payment":
        color = "bg-off-purple";
        break;
      default:
        color = "bg-gray";
    }
    return color;
  };