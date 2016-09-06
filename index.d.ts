import {ContentView} from 'ui/content-view';

export declare class Pulse extends ContentView {

  android: any ;
  /**
   * Set number of pulses.
   *
   * @param count Number of pulses
   * DEFAULT_COUNT = 4;
   */
   count: number;
  /**
     * Set single pulse duration.
     *
     * @param millis Pulse duration in milliseconds
     * DEFAULT_DURATION = 7000;
     */
   duration: number;
  /**
   * Sets the current color of the pulse effect in integer
   * Takes effect immediately
   * Usage: Color.parseColor("<hex-value>") or getResources().getColor(R.color.colorAccent)
   * @param color : an integer representation of color
   * DEFAULT_COLOR = Color.rgb(0, 116, 193);
   */
   pulse_color: string;

  /* set interpolarator(value: number) {
     this._interpolarator = value;
     if (this._android)
       this._android.setInterpolator(value);
   }*/
}