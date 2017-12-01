import CommonChart from './core/CommonChart';
import IAxisConfig, { IAxis } from './typed/IAxis';
import IChart from './typed/IChart';
import ICoord, { IPolarCoord, IRectCoord } from './typed/ICoord';
import IDataPre from './typed/IDataPre';
import IFacet from './typed/IFacet';
import IGuideConfig, { IGuide, ILineGuide, ITextGuide, IImageGuide, IRegionGuide, IArcGuide } from './typed/IGuide';
import ILegendConfig, { ILegend } from './typed/ILegend';
import ISeriesConfig, { ISeries } from './typed/ISeries';
import ITooltipConfig, { ITooltip } from './typed/ITooltip';
import IViewConfig, { IView } from './typed/IView';
import IScale from './typed/IScale';
import IMain from './typed/IMain';
import RegisterShape from './utils/RegisterShape';

export {
  IAxis,
  IAxisConfig,
  IChart,
  ICoord,
  IRectCoord,
  IPolarCoord,
  IDataPre,
  IFacet,
  IGuide,
  IGuideConfig,
  ILineGuide,
  ITextGuide,
  IImageGuide,
  IRegionGuide,
  IArcGuide,
  ILegend,
  ILegendConfig,
  ISeries,
  ISeriesConfig,
  ITooltip,
  ITooltipConfig,
  IView,
  IViewConfig,
  IScale,
  IMain,
  RegisterShape,
};

export default function(config: any) {
  const commonChart = new CommonChart(config);
  commonChart.render();

  return commonChart;
}
