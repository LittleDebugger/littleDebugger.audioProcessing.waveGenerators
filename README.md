# littleDebugger.audioProcessing.waveGenerators

A reusable module to contain audio waveform generators.

Design decissions
* The sine wave generator previously had functionality to set the phase offset when initializing or reseting. This has been removed since its not likely to be needed for audio processing and introduces an overhead. This might be addresssed later and added again if there is a need.
* The sinewave will not be perfect since it now uses a lookup which involves rounding. The performance increase by doing it this way is substantial and the noise is insignificant so its (currently) a worthwhile tradeoff.