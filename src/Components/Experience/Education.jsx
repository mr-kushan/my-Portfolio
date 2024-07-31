import {
  Timeline,
  TimelineItem,
  TimelineConnector,
  TimelineHeader,
  TimelineIcon,
  TimelineBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
// import university from "./assets/university.png";


const Education = () => {
  return (
    <div className="max-w-[32rem] flex justify-center items-center mx-auto">
      <Timeline>
        <TimelineItem>
          <TimelineConnector />
          <TimelineHeader>
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://promolkwebsite.blob.core.windows.net/profiles/promo.lk-promo-48c2b1174c5544e3a8554b2b5fda53b3.jpg"
                alt="user 1"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              Srilanka Institute of Information Technology (SLIIT)
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-14">
            <Typography color="white" className="font-semibold text-black">
            Bachelor of Science Information Technology (BSc IT)
            <br /> 2021 - Present
            </Typography>
          </TimelineBody>
        </TimelineItem>




        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://th.bing.com/th/id/OIP.ntFxdOmz1SaKA7fVMAlB5QHaFR?rs=1&pid=ImgDetMain"
                alt="user 2"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              Collage Of Technology Kurunegala
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="white" className="font-semibold text-black">
              Information & Communication Technology Nvq L-04<br /> 2020 - 2021
            </Typography>
          </TimelineBody>
        </TimelineItem>




        <TimelineItem>
          <TimelineHeader>
            <TimelineConnector />
            <TimelineIcon className="p-0">
              <Avatar
                size="lg"
                src="https://yt3.googleusercontent.com/ytc/AGIKgqPLxlXrYiXP7QBXO1dEprfvXA7we3-e-XIyk-Qb=s900-c-k-c0x00ffffff-no-rj"
                alt="user 2"
              />
            </TimelineIcon>
            <Typography variant="h5" className="text-blue-900">
              The English Bank 
            </Typography>
          </TimelineHeader>
          <TimelineBody className="pb-8">
            <Typography color="white" className="font-semibold text-black">
            Complete Spoken English certificate Cource  <br /> 2019 - 2020
            </Typography>
          </TimelineBody>
        </TimelineItem>
      </Timeline>
    </div>
  );
};

export default Education;
