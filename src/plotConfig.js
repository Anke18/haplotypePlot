/*
 * @Descripttion: 
 * @version: 
 * @Author: Mengwei Li
 * @Date: 2020-04-03 10:21:12
 * @LastEditors: Anke Wang
 * @LastEditTime: 2020-07-07 14:03:01
 */

import { drawBarPlot, drawHeatmapDate } from "./datePlot";
import { formatSelectData } from './search';

import "bootstrap-slider";

export const defaultColor = ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3", "#2f7ed8", "#0d233a", "#8bbc21", "#910000", "#1aadce", "#492970", "#f28f43", "#77a1e5", "#c42525", "#a6c96a", "#4572A7", "#AA4643", "#89A54E", "#80699B", "#3D96AE", "#DB843D", "#92A8CD", "#A47D7C", "#B5CA92", "#7cb5ec", "#434348", "#90ed7d", "#f7a35c", "#8085e9", "#f15c80", "#e4d354", "#2b908f", "#f45b5b", "#91e8e1", "#007bff", "#6610f2", "#6f42c1", "#e83e8c", "#dc3545", "#fd7e14", "#ffc107", "#28a745", "#20c997", "#17a2b8", "#868e96", "#343a40", "#007bff", "#d8b365", "#5ab4ac", "#a1d76a", "#e9a3c9", "#F75C2F", "#FB966E", "#F17C67", "#F596AA", "#F19483", "#FC9F4D", "#FB9966",
    "#C78550", "#E1A679", "#C78550", "#A36336", "#B481BB", "#E16B8C", "#E03C8A", "#6D2E5B", "#A5DEE4", "#81C7D4", "#33A6B8", "#0089A7", "#3A8FB7", "#6699A1", "#1E88A8", "#51A8DD", "#7DB9DE", "#58B2DC", "#2B5F75", "#3A8FB7", "#2E5C6E", "#006284", "#2EA9DF", "#7B90D2", "#7B90D2", "#005CAF", "#113285", "#0F2540", "#211E55", "#0D5661", "#77969A", "#376B6D", "#305A56", "#405B55", "#566C73", "#577C8A", "#B68E55", "#B1B479", "#A5A051", "#939650", "#6C6A2D", "#7DB9DE", "#9B90C2", "#F17C67", "#F6C555", "#86C166", "#B4A582",
    "#96caff", "#faff16", "#fda899", "#13fcbb", "#f7fef7", "#eba6ff", "#bcca83", "#57e502", "#feaf23", "#c6c0cb", "#38f1fd", "#9ccfbe", "#f9feae", "#a6fe8e", "#bfcd03", "#ebd3b6", "#fec0df", "#c2eefc", "#cac2fc", "#bcfcd6", "#f4e5ff", "#f9dc56", "#80da93", "#ebb678", "#b1fb27", "#30dfc8", "#8dd0df", "#1ff479", "#cedbd8", "#d2e6b8", "#85feea", "#97db5c", "#deb7b7", "#cad5ef", "#d0eb6d", "#fe9fe1", "#bdc7ad", "#fcdadf", "#d9bae2", "#dac05a", "#ecda91", "#fef5d0", "#ffa4bc", "#43d9fd", "#d2fcf5", "#b1c7d0", "#e6f0fb", "#83e5bd", "#b2e598", "#fdfb73", "#73fd58", "#a6cfa2", "#a1e3e1", "#e4e21c", "#8ef8b0", "#e2c30e", "#fdc7ff", "#cefeb9", "#0be597", "#d4c491", "#fdc5b5", "#e4fdde", "#d5ccc7", "#acdaf8", "#e4c9da", "#fdc664", "#badfc5", "#bbd15f", "#fdf1f7", "#b4c3ed", "#93e8fd", "#ddd9e3", "#e5e5d7", "#98e116", "#e0d0fb", "#fccd95", "#aafdfe", "#5cd9de", "#deba9d", "#dce994", "#d6b2fb", "#c5bedd", "#bec4c3", "#feab79", "#82ea7f", "#fed7f3", "#8affd2", "#d6fc50", "#e8aed9", "#f7b7c2", "#2bf4e5", "#ffad53", "#11ff13", "#d3fe94", "#c2e530", "#aef161", "#fee5d4", "#a3d378", "#dad351", "#fec328", "#a4e3b3", "#a9efd9", "#feeb8a", "#85d4cd", "#e0b4c9", "#55e358", "#bddbe1", "#48ffa0", "#d6eee1", "#fee3b0", "#ff99fd", "#3fe0b0", "#84d7fe", "#7be9d3", "#1bf3cd", "#d4d4af", "#d6d278", "#70fffe", "#aac8e1", "#ffb0fe", "#b5ccbf", "#c6ccd5", "#ccd9c5", "#feee3e", "#cdc0ab", "#58e182", "#e9b8f8", "#f7bc97", "#b4e275", "#bee8e1", "#e1e3ff", "#ebebb2", "#8fd4af", "#c0d3a2", "#e7c67d", "#6ceba9", "#d8cde4", "#eacdc6", "#d4eef1", "#e7e8e9", "#7deaec", "#88f31d", "#c0efbe", "#75d8be", "#a0d1d3", "#fdacd4", "#09f64f", "#c4dc8c", "#d0d1fc", "#ecccf1", "#f7d517", "#d0dde8", "#e7dadc", "#78fe8b", "#e6e373", "#cde5fd", "#b1fead", "#e7fec5", "#e9fdfd", "#b9c3d9", "#cebec1", "#eab3a4", "#edb84a", "#8aea52", "#bad5fd", "#a7ddea", "#f9c9d5", "#f2deec", "#fbf4e7", "#b3d8cf", "#feb9ed", "#96e89d", "#d5d99c", "#efd16f", "#ecfb92", "#d0bbd2", "#89d97b", "#cdc47c", "#acd345", "#21e0f4", "#9ed693", "#9adfcd", "#ccdc4c", "#e3e3c2", "#d8f003", "#e7f158", "#b8fff2", "#cdb9e9", "#faa8ae", "#cac75c", "#d7d119", "#eccb48", "#bbd7ea", "#a0f3c1", "#cbeaa6", "#c5f4e0", "#ede9f5", "#b8bffd", "#97cced", "#70dba6", "#72dbf2", "#e6bddd", "#ddc2fe", "#b8ddb0", "#e7d29e", "#c7ec8c", "#d1edce", "#c8fb75", "#f9ffe8", "#e9abeb", "#b5d1b3", "#feb6af", "#ffba6e", "#92f772", "#e8f4cb", "#ffeda8", "#e5ff77", "#f6f8fe", "#c4c699", "#c5ca3f", "#e9bb29", "#19e2dc", "#d9bfb4", "#c6cabf", "#e6c091", "#bcd0d0", "#d5cbd3", "#aae346", "#d0d2d3", "#f1c7ab", "#72ef95", "#cdda6f", "#d9d5c0", "#a2eb81", "#72f3cc", "#91efe6", "#fed284", "#a6edf6", "#4bfee0", "#9bfb4f", "#c1f3f6", "#e0f9ab", "#d4ffd2", "#fffac1", "#a9c5fd", "#f0acc4", "#7adf34", "#a8d516", "#86dade", "#6cdfd7", "#a7d5b9", "#b4d899", "#f1c0bf", "#a9e8c7", "#e6e04c", "#fcd4bf", "#67feb6", "#ddfeee", "#f5af92", "#a7cddc", "#c7cae9", "#e1c2c9", "#06f6a4", "#64f36c", "#ffd056", "#e9d3ea", "#94f595", "#eadbcc", "#acf2b2", "#a2fde0", "#f5e5c6", "#f7eb67", "#f1e9e6", "#e2efdb", "#fbfd52", "#aacac8", "#6fdf6e", "#23e83d", "#d6c33e", "#edbb66", "#96d8f1", "#d9c9a7", "#30ef8c", "#66ed41", "#eabeed", "#c3dbce", "#d6d6e9", "#f8c6ee", "#d5d9d1", "#96f0cc", "#c7ef56", "#8ef6ff", "#aff0e8", "#b7f593", "#dee7e0", "#bdff5c", "#eff01a", "#d7f0fe", "#bdfdc3", "#f0ef9c", "#d3fe14", "#bec0ea", "#c6c2be", "#eab1b3",]

export const nodeRange = [1, 12]
export const linkRange = [7, 200]
export const chargeRange = -2

export const geneStructure = {
    "gene":
        [{ "start": 1, "end": 265, "name": "5'UTR" },
        { "start": 266, "end": 21555, "name": "gene-orf1ab" },
        { "start": 21563, "end": 25384, "name": "gene-S" },
        { "start": 25393, "end": 26220, "name": "gene-ORF3a" },
        { "start": 26245, "end": 26472, "name": "gene-E" },
        { "start": 26523, "end": 27191, "name": "gene-M" },
        { "start": 27202, "end": 27387, "name": "gene-ORF6" },
        { "start": 27394, "end": 27759, "name": "gene-ORF7a" },
        { "start": 27894, "end": 28259, "name": "gene-ORF8" },
        { "start": 28274, "end": 29533, "name": "gene-N" },
        { "start": 29558, "end": 29674, "name": "gene-ORF10" },
        { "start": 29675, "end": 29903, "name": "3'UTR" },]
};


export const nsp = {
    "nsp":
        [{ "start": 266, "end": 805, "name": "nsp1" },
        { "start": 806, "end": 2719, "name": "nsp2" },
        { "start": 2720, "end": 8554, "name": "nsp3" },
        { "start": 8555, "end": 10054, "name": "nsp4" },
        { "start": 10055, "end": 10972, "name": "nsp5" },
        { "start": 10973, "end": 11842, "name": "nsp6" },
        { "start": 11843, "end": 12091, "name": "nsp7" },
        { "start": 12092, "end": 12685, "name": "nsp8" },
        { "start": 12686, "end": 13024, "name": "nsp9" },
        { "start": 13025, "end": 13441, "name": "nsp10" },
        { "start": 13442, "end": 13480, "name": "nsp11" },
        { "start": 13481, "end": 16236, "name": "nsp12" },
        { "start": 16237, "end": 18039, "name": "nsp13" },
        { "start": 18040, "end": 19620, "name": "nsp14" },
        { "start": 19621, "end": 20658, "name": "nsp15" },
        { "start": 20659, "end": 21552, "name": "nsp16" },]
};


export const defaultBehaviors = (uniqueCountry, uniqueDate, graph) => {

    $(".dropdown-menu").on("click", "*", e => {
        e.stopPropagation()
    })

    $(function () {
        $("[data-toggle='popover']").popover()
    })

    let a = $("#linkSize").slider({
        min: 1,
        max: 500,
        value: linkRange
    });

    let b = $("#nodeSize").slider({
        min: 1,
        max: 50,
        value: nodeRange,
    });

    let c = $("#chargeSize").slider({
        min: -100,
        max: 0,
        value: chargeRange,
    });

    $("#searchBar").select2({
        minimumInputLength: 1,
        data: formatSelectData(graph),
        templateResult: formatState,
        language: {
            inputTooShort: function () {
                return "Highlight nodes with Country，Acc. No.  or  Collection Date";
            }
        }
    });

    function formatState(state) {
        if (state.text != "Searching…") {
            var $state = $("<span>" + state.id.split("|")[0] + "</span><span style='float: right'><kbd>" + state.id.split("|")[1] + "</kbd></span>");
            return $state;
        }
    };
}

