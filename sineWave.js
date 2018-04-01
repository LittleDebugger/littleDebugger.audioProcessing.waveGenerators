// The sine (sinusoidal) wave generator.
com.littleDebugger.namespacer.createNamespace("littleDebugger.audioProcessing.waveGenerators.sineWave");

// 'Constructor'
// <offset> The offset of the initial phase in degrees. - Starting from 9 o'clock.
// <sampleRate> The sample rate of the audio player. This is required for correct frequency waves.
littleDebugger.audioProcessing.waveGenerators.sineWave = function(offset, sampleRate) {
    var circleRadians = 2 * Math.PI;
    var circleDegrees = 360;

    var that = {};
    var phase;

    // Reset the state of the generator so it can be reused.
    that.reset = function() {
        phase = circleRadians * (offset / circleDegrees);
    };

    // Get the next sample in the cycle.
    // <freqency> The frequency of the wave.
    that.getSample = function(frequency) {
        var nextValue = Math.sin(phase);
        phase += circleRadians * (frequency / sampleRate);
        if (phase > circleRadians) {
            phase = phase % circleRadians;
        }

        return nextValue;
    };

    that.reset();

    return that;
};