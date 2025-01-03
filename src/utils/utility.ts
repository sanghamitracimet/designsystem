export const BtnStatusSelector = (status: string) => {
    let color: string;
    switch (status) {
      case "Approval":
        color = "bg-offBlue"; 
        break;
      case "Sign":
        color = "bg-offPink";
        break;
      case "Briefing":
        color = "bg-skyBlue";
        break;
      case "Payment":
        color = "bg-offPurple";
        break;
      default:
        color = "bg-gray";
    }
    return color;
  };

export function range(startIndex:number, endIndex:number){
    const result = [];
    for (let i = startIndex; i <= endIndex; i++) {
      result.push(i);
    }
    return result;
}
