import fluentFfmpeg from "fluent-ffmpeg";




export function generateWaveformImage(input: string, output: string) {
    return new Promise((resolve, reject) => {
        fluentFfmpeg(input)
            .audioFilters("aformat=channel_layouts=stereo")
            .outputOptions('-filter_complex', 'aformat=channel_layouts=stereo,showwavespic=s=600x120')
            .output(output)
            .on("end", () => resolve(output))
            .on("error", (err) => reject(err))
            .run();
    });
};


// import ffmpeg from "ffmpeg";

// interface WaveformImgOptions {
//     size: {
//         width: string;
//         height: string;
//     };
// }

// /**
//  * 
//  * @param input - The input file path
//  * @param output - The output file path
//  * @param options - The options for the waveform image
//  * @returns The output file path
//  * 
//  * @example
//  * ```ts
//  * import { generateWaveformImg } from "@clxrity/react-audio";
//  * 
//  * const input = "path/to/audio.wav";
//  * const output = "path/to/output.png";
//  * 
//  * generateWaveformImg(input, output, {
//  *    size: {
//  *       width: "640",
//  *      height: "120"
//  *   }).then((result) => {
//  *     console.log(result);
//  * });
//  * ```
//  */
// export default async function generateWaveformImg(input: string,
//     output: string, { size }: WaveformImgOptions
// ): Promise<string> {

//     let outputFile: string = "";

//     const process = new ffmpeg(input);

//     process.then((video) => {
//         video.addFilterComplex(`showwavespic=s=${size.width ? size.width : "640"}x${size.height ? size.height : "120"}`)
//     });

//     (await process).save(output, (error, file) => { 
//         if (error) {
//             console.error(error);
//         }
//         console.log("File has been saved: ", file);

//         outputFile = file;
//     });

//     if (outputFile) {
//         return outputFile;
//     } else {
//         return "";
//     }
// };