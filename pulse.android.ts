import {ContentView} from 'ui/content-view';
import {PropertyMetadata} from "ui/core/proxy";
import {Property, PropertyMetadataSettings} from "ui/core/dependency-observable";
import { View } from "ui/core/view";
import { Color } from "color";
declare var android: any;

export class Pulse extends ContentView {
  private _count: number;
  private _duration: number;
  private _repeat: number;
  private _color: number;
  private _interpolarator: number;
  private _startscrhat: boolean;
  private _android: pl.bclogic.pulsator4droid.library.PulsatorLayout;
  get android(): any {
    return this._android;
  }

  get _nativeView(): any {
    return this._android;
  }
  /**
   * Set number of pulses.
   *
   * @param count Number of pulses
   * DEFAULT_COUNT = 4;
   */
  set count(value: number) {
    this._count = value;
    if (this._android)
      this._android.setCount(value);
  }
  /**
     * Set single pulse duration.
     *
     * @param millis Pulse duration in milliseconds
     * DEFAULT_DURATION = 7000;
     */
  set duration(value: number) {
    this._duration = value;
    if (this._android)
      this._android.setDuration(value);
  }
  /**
   * Sets the current color of the pulse effect in integer
   * Takes effect immediately
   * Usage: Color.parseColor("<hex-value>") or getResources().getColor(R.color.colorAccent)
   * @param color : an integer representation of color
   * DEFAULT_COLOR = Color.rgb(0, 116, 193);
   */
  set pulse_color(value: string) {
    console.log(value);
    this._color = new Color(value).android;
    if (this._android) {
      this._android.setColor(this._color);
      console.log("sdad");
    }
  }

  /* set interpolarator(value: number) {
     this._interpolarator = value;
     if (this._android)
       this._android.setInterpolator(value);
   }*/

  public _createUI() {
    this._android = new pl.bclogic.pulsator4droid.library.PulsatorLayout(this._context);
    try {

      /*  this.color_ = 16409535;
      if (!this._count)
        this._count = this._android.getCount();
      if (!this._duration)
        this._duration = this._android.getDuration();
        if(!this._interpolarator)
          this._interpolarator=this._android.getInterpolator();*/
      this._android.start();

    /*  if (this._count)
        this._android.setCount(this._count);
      if (this._color)
        this._android.setColor(this._color);*/
      // this.color_ =new Color("#fa63bf").android;
    } catch (error) {
      console.log("error : " + error);
    }

  }
}