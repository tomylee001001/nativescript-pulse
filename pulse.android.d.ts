import { ContentView } from 'ui/content-view';
export declare class Pulse extends ContentView {
    private _count;
    private _duration;
    private _repeat;
    private _color;
    private _interpolarator;
    private _startscrhat;
    private _android;
    android: any;
    _nativeView: any;
    count: number;
    duration: number;
    pulse_color: string;
    _createUI(): void;
}
