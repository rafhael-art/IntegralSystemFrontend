import { format } from "date-fns";
import { AutoFiltersWithButton, Input } from "../../components/auto-filters-with-button/auto-filters-with-button.interface";

export function GetInput(inputs: AutoFiltersWithButton): string {
  let filter: string = "";
  inputs.Inputs.forEach((item: Input) => {
    if (item.type == 'date') {
      filter += `&${item.name}=${format(item.value, 'MM-dd-yyyy')}`;
    }
    else
      filter += `&${item.name}=${item.value}`
  })
  return filter;
}

