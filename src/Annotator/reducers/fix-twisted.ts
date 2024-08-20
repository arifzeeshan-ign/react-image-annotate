// @flow

import { ExpandingLine } from "../../ImageCanvas/region-tools.tsx";

export default (pointsWithAngles: ExpandingLine["points"]) => {
  // Adjacent angles should not have an angular distance of more than Math.PI
  return pointsWithAngles;
};
