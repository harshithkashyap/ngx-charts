/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '../../../../build/common/axes/y-axis-ticks.component';
import * as import1 from '@angular/core/src/change_detection/change_detection_util';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/constants';
import * as import8 from '@angular/core/src/linker/component_factory';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '@angular/core/src/security';
import * as import11 from '../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '@angular/core/src/linker/template_ref';
import * as import13 from '@angular/common/src/directives/ng_if';
import * as import14 from '@angular/core/src/linker/query_list';
import * as import15 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/core/src/linker/element_ref';
import * as import18 from '@angular/common/src/directives/ng_for';
export class Wrapper_YAxisTicksComponent {
  /*private*/ _eventHandler:Function;
  context:import0.YAxisTicksComponent;
  /*private*/ _changed:boolean;
  /*private*/ _changes:{[key: string]:any};
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  subscription0:any;
  constructor() {
    this._changed = false;
    this._changes = {};
    this.context = new import0.YAxisTicksComponent();
    this._expr_0 = import1.UNINITIALIZED;
    this._expr_1 = import1.UNINITIALIZED;
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
    this._expr_6 = import1.UNINITIALIZED;
    this._expr_7 = import1.UNINITIALIZED;
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
    (this.subscription0 && this.subscription0.unsubscribe());
  }
  check_scale(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.scale = currValue;
      this._changes['scale'] = new import1.SimpleChange(this._expr_0,currValue);
      this._expr_0 = currValue;
    }
  }
  check_orient(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_1,currValue))) {
      this._changed = true;
      this.context.orient = currValue;
      this._changes['orient'] = new import1.SimpleChange(this._expr_1,currValue);
      this._expr_1 = currValue;
    }
  }
  check_tickArguments(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_2,currValue))) {
      this._changed = true;
      this.context.tickArguments = currValue;
      this._changes['tickArguments'] = new import1.SimpleChange(this._expr_2,currValue);
      this._expr_2 = currValue;
    }
  }
  check_tickValues(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_3,currValue))) {
      this._changed = true;
      this.context.tickValues = currValue;
      this._changes['tickValues'] = new import1.SimpleChange(this._expr_3,currValue);
      this._expr_3 = currValue;
    }
  }
  check_tickStroke(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_4,currValue))) {
      this._changed = true;
      this.context.tickStroke = currValue;
      this._changes['tickStroke'] = new import1.SimpleChange(this._expr_4,currValue);
      this._expr_4 = currValue;
    }
  }
  check_tickFormatting(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_5,currValue))) {
      this._changed = true;
      this.context.tickFormatting = currValue;
      this._changes['tickFormatting'] = new import1.SimpleChange(this._expr_5,currValue);
      this._expr_5 = currValue;
    }
  }
  check_showGridLines(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_6,currValue))) {
      this._changed = true;
      this.context.showGridLines = currValue;
      this._changes['showGridLines'] = new import1.SimpleChange(this._expr_6,currValue);
      this._expr_6 = currValue;
    }
  }
  check_gridLineWidth(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_7,currValue))) {
      this._changed = true;
      this.context.gridLineWidth = currValue;
      this._changes['gridLineWidth'] = new import1.SimpleChange(this._expr_7,currValue);
      this._expr_7 = currValue;
    }
  }
  check_height(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_8,currValue))) {
      this._changed = true;
      this.context.height = currValue;
      this._changes['height'] = new import1.SimpleChange(this._expr_8,currValue);
      this._expr_8 = currValue;
    }
  }
  check_goalLine(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_9,currValue))) {
      this._changed = true;
      this.context.goalLine = currValue;
      this._changes['goalLine'] = new import1.SimpleChange(this._expr_9,currValue);
      this._expr_9 = currValue;
    }
  }
  check_goalLineText(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_10,currValue))) {
      this._changed = true;
      this.context.goalLineText = currValue;
      this._changes['goalLineText'] = new import1.SimpleChange(this._expr_10,currValue);
      this._expr_10 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if (changed) {
      this.context.ngOnChanges(this._changes);
      this._changes = {};
    } }
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any,emit0:boolean):void {
    this._eventHandler = _eventHandler;
    if (emit0) { (this.subscription0 = this.context.dimensionsChanged.subscribe(_eventHandler.bind(view,'dimensionsChanged'))); }
  }
}
var renderType_YAxisTicksComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_YAxisTicksComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.YAxisTicksComponent>;
  _YAxisTicksComponent_0_3:Wrapper_YAxisTicksComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_YAxisTicksComponent_Host0,renderType_YAxisTicksComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'g',new import3.InlineArray2(2,'ngx-charts-y-axis-ticks',''),rootSelector,(null as any));
    this.compView_0 = new View_YAxisTicksComponent0(this.viewUtils,this,0,this._el_0);
    this._YAxisTicksComponent_0_3 = new Wrapper_YAxisTicksComponent();
    this.compView_0.create(this._YAxisTicksComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import8.ComponentRef_<any>(0,this,this._el_0,this._YAxisTicksComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.YAxisTicksComponent) && (0 === requestNodeIndex))) { return this._YAxisTicksComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    if (this._YAxisTicksComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange)) { this.compView_0.markAsCheckOnce(); }
    this.compView_0.internalDetectChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._YAxisTicksComponent_0_3.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this._YAxisTicksComponent_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const YAxisTicksComponentNgFactory:import8.ComponentFactory<import0.YAxisTicksComponent> = new import8.ComponentFactory<import0.YAxisTicksComponent>('g[ngx-charts-y-axis-ticks]',View_YAxisTicksComponent_Host0,import0.YAxisTicksComponent);
const styles_YAxisTicksComponent:any[] = ([] as any[]);
class View_YAxisTicksComponent1 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _text_4:any;
  _el_5:any;
  _text_6:any;
  _text_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_9:any;
  /*private*/ _expr_10:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  /*private*/ _expr_15:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_YAxisTicksComponent1,renderType_YAxisTicksComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_8 = import1.UNINITIALIZED;
    this._expr_9 = import1.UNINITIALIZED;
    this._expr_10 = import1.UNINITIALIZED;
    this._expr_11 = import1.UNINITIALIZED;
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
    this._expr_15 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',new import3.InlineArray2(2,'class','tick'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,':svg:title',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'',(null as any));
    this._text_4 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_0,':svg:text',new import3.InlineArray2(2,'stroke-width','0.01'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'',(null as any));
    this._text_7 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._text_4,
      this._el_5,
      this._text_6,
      this._text_7
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_8:any = this.parentView.context.transform(this.context.$implicit);
    if (import3.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementAttribute(this._el_0,'transform',((currVal_8 == null)? (null as any): currVal_8.toString()));
      this._expr_8 = currVal_8;
    }
    const currVal_9:any = import3.inlineInterpolate(1,'',this.parentView.context.tickFormat(this.context.$implicit),'');
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setText(this._text_3,currVal_9);
      this._expr_9 = currVal_9;
    }
    const currVal_10:any = this.parentView.context.dy;
    if (import3.checkBinding(throwOnChange,this._expr_10,currVal_10)) {
      this.renderer.setElementAttribute(this._el_5,'dy',((currVal_10 == null)? (null as any): currVal_10.toString()));
      this._expr_10 = currVal_10;
    }
    const currVal_11:any = this.parentView.context.x1;
    if (import3.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementAttribute(this._el_5,'x',((currVal_11 == null)? (null as any): currVal_11.toString()));
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this.parentView.context.y1;
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementAttribute(this._el_5,'y',((currVal_12 == null)? (null as any): currVal_12.toString()));
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this.parentView.context.textAnchor;
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementAttribute(this._el_5,'text-anchor',((currVal_13 == null)? (null as any): currVal_13.toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = '12px';
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementStyle(this._el_5,'font-size',((this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_14) == null)? (null as any): this.viewUtils.sanitizer.sanitize(import10.SecurityContext.STYLE,currVal_14).toString()));
      this._expr_14 = currVal_14;
    }
    const currVal_15:any = import3.inlineInterpolate(1,'\n          ',this.parentView.context.trimLabel(this.parentView.context.tickFormat(this.context.$implicit)),'\n        ');
    if (import3.checkBinding(throwOnChange,this._expr_15,currVal_15)) {
      this.renderer.setText(this._text_6,currVal_15);
      this._expr_15 = currVal_15;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_YAxisTicksComponent3 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_YAxisTicksComponent3,renderType_YAxisTicksComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n        ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,':svg:line',new import3.InlineArray4(4,'class','gridline-path gridline-path-horizontal','x1','0'),(null as any));
    this._text_3 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4:any = this.parentView.parentView.context.gridLineTransform();
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_0,'transform',((currVal_4 == null)? (null as any): currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = this.parentView.parentView.context.gridLineWidth;
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementAttribute(this._el_2,'x2',((currVal_5 == null)? (null as any): currVal_5.toString()));
      this._expr_5 = currVal_5;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_YAxisTicksComponent2 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _anchor_2:any;
  /*private*/ _vc_2:import9.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import11.Wrapper_NgIf;
  _text_3:any;
  /*private*/ _expr_7:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_YAxisTicksComponent2,renderType_YAxisTicksComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_7 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import9.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import12.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import11.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this._text_3 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._anchor_2,
      this._text_3
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import13.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2_0_0:any = this.parentView.context.showGridLines;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    const currVal_7:any = this.parentView.context.transform(this.context.$implicit);
    if (import3.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementAttribute(this._el_0,'transform',((currVal_7 == null)? (null as any): currVal_7.toString()));
      this._expr_7 = currVal_7;
    }
  }
  destroyInternal():void {
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 2)) { return new View_YAxisTicksComponent3(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
class View_YAxisTicksComponent5 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_YAxisTicksComponent5,renderType_YAxisTicksComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_2 = import1.UNINITIALIZED;
    this._expr_3 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:text',new import3.InlineArray8(8,'class','goalline-text','dx','0.75em','dy','-0.5em','x1','0'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.parentView.parentView.context.gridLineWidth;
    if (import3.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementAttribute(this._el_0,'x2',((currVal_2 == null)? (null as any): currVal_2.toString()));
      this._expr_2 = currVal_2;
    }
    const currVal_3:any = import3.inlineInterpolate(1,'\n          ',this.parentView.parentView.context.goalLineText,'\n        ');
    if (import3.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setText(this._text_1,currVal_3);
      this._expr_3 = currVal_3;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
class View_YAxisTicksComponent4 extends import2.AppView<any> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _vc_4:import9.ViewContainer;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import11.Wrapper_NgIf;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _text_8:any;
  /*private*/ _expr_12:any;
  /*private*/ _expr_13:any;
  /*private*/ _expr_14:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import9.ViewContainer) {
    super(View_YAxisTicksComponent4,renderType_YAxisTicksComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_12 = import1.UNINITIALIZED;
    this._expr_13 = import1.UNINITIALIZED;
    this._expr_14 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n      ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor(this._el_2,(null as any));
    this._vc_4 = new import9.ViewContainer(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import12.TemplateRef_(this,4,this._anchor_4);
    this._NgIf_4_6 = new import11.Wrapper_NgIf(this._vc_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_2,':svg:line',new import3.InlineArray4(4,'class','goalline-path goalline-path-horizontal','x1','0'),(null as any));
    this._text_7 = this.renderer.createText(this._el_2,'\n      ',(null as any));
    this._text_8 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import13.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = this.parentView.context.goalLineText;
    this._NgIf_4_6.check_ngIf(currVal_4_0_0,throwOnChange,false);
    this._NgIf_4_6.ngDoCheck(this,this._anchor_4,throwOnChange);
    this._vc_4.detectChangesInNestedViews(throwOnChange);
    const currVal_12:any = this.parentView.context.transform(this.parentView.context.goalLine);
    if (import3.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementAttribute(this._el_0,'transform',((currVal_12 == null)? (null as any): currVal_12.toString()));
      this._expr_12 = currVal_12;
    }
    const currVal_13:any = this.parentView.context.gridLineTransform();
    if (import3.checkBinding(throwOnChange,this._expr_13,currVal_13)) {
      this.renderer.setElementAttribute(this._el_2,'transform',((currVal_13 == null)? (null as any): currVal_13.toString()));
      this._expr_13 = currVal_13;
    }
    const currVal_14:any = this.parentView.context.gridLineWidth;
    if (import3.checkBinding(throwOnChange,this._expr_14,currVal_14)) {
      this.renderer.setElementAttribute(this._el_6,'x2',((currVal_14 == null)? (null as any): currVal_14.toString()));
      this._expr_14 = currVal_14;
    }
  }
  destroyInternal():void {
    this._vc_4.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 4)) { return new View_YAxisTicksComponent5(this.viewUtils,this,4,this._anchor_4,this._vc_4); }
    return (null as any);
  }
}
var renderType_YAxisTicksComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,styles_YAxisTicksComponent,{});
export class View_YAxisTicksComponent0 extends import2.AppView<import0.YAxisTicksComponent> {
  _viewQuery_ticksel_0:import14.QueryList<any>;
  _text_0:any;
  _el_1:any;
  _text_2:any;
  _anchor_3:any;
  /*private*/ _vc_3:import9.ViewContainer;
  _TemplateRef_3_5:any;
  _NgFor_3_6:import15.Wrapper_NgFor;
  _text_4:any;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _vc_6:import9.ViewContainer;
  _TemplateRef_6_5:any;
  _NgFor_6_6:import15.Wrapper_NgFor;
  _text_7:any;
  _anchor_8:any;
  /*private*/ _vc_8:import9.ViewContainer;
  _TemplateRef_8_5:any;
  _NgIf_8_6:import11.Wrapper_NgIf;
  _text_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_YAxisTicksComponent0,renderType_YAxisTicksComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import7.ChangeDetectorStatus.CheckOnce);
  }
  createInternal(rootSelector:string):import8.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._viewQuery_ticksel_0 = new import14.QueryList<any>();
    this._text_0 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,':svg:g',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'\n      ',(null as any));
    this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1,(null as any));
    this._vc_3 = new import9.ViewContainer(3,1,this,this._anchor_3);
    this._TemplateRef_3_5 = new import12.TemplateRef_(this,3,this._anchor_3);
    this._NgFor_3_6 = new import15.Wrapper_NgFor(this._vc_3.vcRef,this._TemplateRef_3_5,this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.ref);
    this._text_4 = this.renderer.createText(this._el_1,'\n    ',(null as any));
    this._text_5 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_6 = new import9.ViewContainer(6,(null as any),this,this._anchor_6);
    this._TemplateRef_6_5 = new import12.TemplateRef_(this,6,this._anchor_6);
    this._NgFor_6_6 = new import15.Wrapper_NgFor(this._vc_6.vcRef,this._TemplateRef_6_5,this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.ref);
    this._text_7 = this.renderer.createText(parentRenderNode,'\n    ',(null as any));
    this._anchor_8 = this.renderer.createTemplateAnchor(parentRenderNode,(null as any));
    this._vc_8 = new import9.ViewContainer(8,(null as any),this,this._anchor_8);
    this._TemplateRef_8_5 = new import12.TemplateRef_(this,8,this._anchor_8);
    this._NgIf_8_6 = new import11.Wrapper_NgIf(this._vc_8.vcRef,this._TemplateRef_8_5);
    this._text_9 = this.renderer.createText(parentRenderNode,'\n  ',(null as any));
    this._viewQuery_ticksel_0.reset([new import17.ElementRef(this._el_1)]);
    this.context.ticksElement = this._viewQuery_ticksel_0.first;
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._text_0,
      this._el_1,
      this._text_2,
      this._anchor_3,
      this._text_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._anchor_8,
      this._text_9
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import12.TemplateRef) && (3 === requestNodeIndex))) { return this._TemplateRef_3_5; }
    if (((token === import18.NgFor) && (3 === requestNodeIndex))) { return this._NgFor_3_6.context; }
    if (((token === import12.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import18.NgFor) && (6 === requestNodeIndex))) { return this._NgFor_6_6.context; }
    if (((token === import12.TemplateRef) && (8 === requestNodeIndex))) { return this._TemplateRef_8_5; }
    if (((token === import13.NgIf) && (8 === requestNodeIndex))) { return this._NgIf_8_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_3_0_0:any = this.context.ticks;
    this._NgFor_3_6.check_ngForOf(currVal_3_0_0,throwOnChange,false);
    this._NgFor_3_6.ngDoCheck(this,this._anchor_3,throwOnChange);
    const currVal_6_0_0:any = this.context.ticks;
    this._NgFor_6_6.check_ngForOf(currVal_6_0_0,throwOnChange,false);
    this._NgFor_6_6.ngDoCheck(this,this._anchor_6,throwOnChange);
    const currVal_8_0_0:any = (this.context.goalLine && !this.context.showGridLines);
    this._NgIf_8_6.check_ngIf(currVal_8_0_0,throwOnChange,false);
    this._NgIf_8_6.ngDoCheck(this,this._anchor_8,throwOnChange);
    this._vc_3.detectChangesInNestedViews(throwOnChange);
    this._vc_6.detectChangesInNestedViews(throwOnChange);
    this._vc_8.detectChangesInNestedViews(throwOnChange);
  }
  destroyInternal():void {
    this._vc_3.destroyNestedViews();
    this._vc_6.destroyNestedViews();
    this._vc_8.destroyNestedViews();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 3)) { return new View_YAxisTicksComponent1(this.viewUtils,this,3,this._anchor_3,this._vc_3); }
    if ((nodeIndex == 6)) { return new View_YAxisTicksComponent2(this.viewUtils,this,6,this._anchor_6,this._vc_6); }
    if ((nodeIndex == 8)) { return new View_YAxisTicksComponent4(this.viewUtils,this,8,this._anchor_8,this._vc_8); }
    return (null as any);
  }
}