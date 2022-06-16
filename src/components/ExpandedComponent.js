import { ExpandedStyled } from "../styles/styledComponents/ExpandedStyled";

export const ExpandedComponent = ({ data }) => 
<ExpandedStyled className="expanded">
<h3>Categoría:<em>{data.categoría}</em></h3>
<span>{data.catDesc}</span>
</ExpandedStyled>;