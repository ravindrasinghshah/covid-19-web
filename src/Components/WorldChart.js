import React, { useState } from 'react';
import './WorldChart.css';
import ReactTooltip from 'react-tooltip';
import World from '../Common/World.json';
import { sys } from '../Common/Utilities';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import PublicIcon from '@material-ui/icons/Public';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import OpenWithIcon from '@material-ui/icons/OpenWith';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import {
    ComposableMap,
    Sphere,
    ZoomableGroup,
    Graticule,
    Geographies,
    Geography
} from "react-simple-maps";


function WorldChart({ countries }) {
    const [content, setContent] = useState("");
    const worldData = World;

    const tooltipContent = code => {
        var stats = code;
        var content = `<div class="worldChart_map_tooltip">
        <h4>${stats.Country}</h4>
        <p><span>Total Confirmed: </span><span>${sys.convertToCommaSeperated(stats.TotalConfirmed)}</span></p>
        <p><span>Total Recovered: </span><span>${sys.convertToCommaSeperated(stats.TotalRecovered)}</span></p>
        <p><span>Total Deaths: </span><span>${sys.convertToCommaSeperated(stats.TotalDeaths)}</span></p>
        <p><span>New Confirmed: </span><span>${sys.convertToCommaSeperated(stats.NewConfirmed)}</span></p>
        <p><span>New Recovered: </span><span>${sys.convertToCommaSeperated(stats.NewRecovered)}</span></p>
        <p><span>New Deaths: </span><span>${sys.convertToCommaSeperated(stats.NewDeaths)}</span></p>
        </div>`;
        return content;
    }

    return (
        <div className="worldChart">
            {<>
                <div className="worldChart_map">
                    <div className="map">
                        <ComposableMap data-tip="" projectionConfig={{
                            rotate: [-10, 0, 0],
                            scale: 147
                        }}>
                            <ZoomableGroup zoom={2}>
                                {/* <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
                                <Graticule stroke="#E4E5E6" strokeWidth={0.5} /> */}
                                <Geographies geography={worldData}>
                                    {({ geographies }) =>
                                        geographies.map(geo => (
                                            <Geography
                                                key={geo.rsmKey}
                                                geography={geo}
                                                onMouseEnter={() => {
                                                    const { NAME, ISO_A2 } = geo.properties;
                                                    {
                                                        countries.filter(country => country.CountryCode === ISO_A2)
                                                            .map(filteredCountry => {
                                                                setContent(`${tooltipContent(filteredCountry)}`)
                                                            })
                                                    }
                                                }}
                                                onMouseLeave={() => {
                                                    setContent("");
                                                }}
                                                style={{
                                                    default: {
                                                        fill: "#D6D6DA",
                                                        outline: "none"
                                                    },
                                                    hover: {
                                                        fill: "#F53",
                                                        outline: "none"
                                                    },
                                                    pressed: {
                                                        fill: "#E42",
                                                        outline: "none"
                                                    }
                                                }}
                                            />
                                        ))
                                    }
                                </Geographies>
                            </ZoomableGroup>
                        </ComposableMap>
                    </div>
                    <div className="timeline mobile-hidden">
                        <Timeline align="left">
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot color="primary">
                                        <PublicIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>World Cases Map</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot style={{ backgroundColor: '#ec3446' }}>
                                        <TouchAppIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Hover over location in map</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot style={{ backgroundColor: 'black' }}>
                                        <ZoomInIcon />
                                    </TimelineDot>
                                    <TimelineConnector />
                                </TimelineSeparator>
                                <TimelineContent>Zoom In and Out</TimelineContent>
                            </TimelineItem>
                            <TimelineItem>
                                <TimelineSeparator>
                                    <TimelineDot style={{ backgroundColor: '#30409F' }}>
                                        <OpenWithIcon />
                                    </TimelineDot>
                                </TimelineSeparator>
                                <TimelineContent>Move map to find location</TimelineContent>
                            </TimelineItem>
                        </Timeline>
                    </div>

                </div>
                <ReactTooltip html={true}>{content}</ReactTooltip>
            </>

            }
        </div>
    )
}

export default WorldChart
