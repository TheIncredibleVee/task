import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Chip,
  Tooltip,
  Progress,
  Button
} from "@material-tailwind/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";
import { authorsTableData, projectsTableData } from "@/data";
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import Modal from "./modal.jsx";
import { useState } from "react";

export function Tables() {
  const [showModal, setShowModal] = useState(true);
  return (
    <div className="mt-4 mb-8 flex flex-col gap-4">
      {showModal? <Modal/> :null}
      <Typography variant="h5" color="blue-gray">
        Pending
      </Typography>
      <Card>
        <CardBody variant="gradient" className="p-4">
          <div className="pt-2">
            <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-8 w-full">
              <div className="text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Pending
                </h6>
                <PendingActionsIcon fontSize="large"/>
              </div>
              <div className="col-span-2 text-center">
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
              </div>
              <div className="col-span-2 text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Services
                </h6>
                <ul className ="dashed">
                  <li >one</li>
                  <li>tow</li>
                </ul>
              </div>
              <div className="col-span-2 text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Req
                </h6>
                <p>
                  name
                </p>
              </div>
              <div className="text-center">
                <Button>
                  Approve
                </Button>
                <p className="pt-2 underline">
                  details
                </p>
              </div>
            </div>
          </div>
          
        </CardBody>
      </Card>
      <Card>
        <CardBody variant="gradient" className="p-4">
          <div className="pt-2">
            <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-8">
              <div className="text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Pending
                </h6>
                <PendingActionsIcon fontSize="large"/>
              </div>
              <div className="col-span-2 text-center">
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
              </div>
              <div className="col-span-2 text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Services
                </h6>
                <ul className ="dashed">
                  <li >one</li>
                  <li>tow</li>
                </ul>
              </div>
              <div className="col-span-2 text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Req
                </h6>
                <p>
                  name
                </p>
              </div>
              <div className="text-center">
                <Button>
                  Approve
                </Button>
                <p className="pt-2 underline">
                  details
                </p>
              </div>
            </div>
          </div>
          
        </CardBody>
      </Card>
      <Typography variant="h5" color="blue-gray">
        Approved
      </Typography>
      <Card>
        <CardBody variant="gradient" className="p-4">
          <div className="pt-2">
            <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-8">
              <div className="text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Pending
                </h6>
                <AssignmentTurnedInOutlinedIcon fontSize="large"/>
              </div>
              <div className="col-span-2 text-center">
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
              </div>
              <div className="col-span-2 text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Services
                </h6>
                <ul className ="dashed">
                  <li >one</li>
                  <li>tow</li>
                </ul>
              </div>
              <div className="col-span-2 text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Req
                </h6>
                <p>
                  name
                </p>
              </div>
              <div className="text-center">
                <p className="pt-2 underline">
                  details
                </p>
              </div>
            </div>
          </div>
          
        </CardBody>
      </Card>
      <Card>
        <CardBody variant="gradient" className="p-4">
          <div className="pt-2">
            <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-8">
              <div className="text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Pending
                </h6>
                <AssignmentTurnedInOutlinedIcon fontSize="large"/>
              </div>
              <div className="col-span-2 text-center">
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
              </div>
              <div className="col-span-2 text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Services
                </h6>
                <ul className ="dashed">
                  <li >one</li>
                  <li>tow</li>
                </ul>
              </div>
              <div className="col-span-2 text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Req
                </h6>
                <p>
                  name
                </p>
              </div>
              <div className="text-center">
                <p className="pt-2 underline">
                  details
                </p>
              </div>
            </div>
          </div>
          
        </CardBody>
      </Card>
      <Card>
        <CardBody variant="gradient" className="p-4">
          <div className="pt-2">
            <div className="grid grid-cols-2 gap-5 row-gap-5 sm:grid-cols-3 lg:grid-cols-8">
              <div className="text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Pending
                </h6>
                <AssignmentTurnedInOutlinedIcon fontSize="large"/>
              </div>
              <div className="col-span-2 text-center">
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
                <p className="mb-2 text-sm leading-5 tracking-wider">
                  <b>Text: </b>Pending
                </p>
              </div>
              <div className="col-span-2 text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Services
                </h6>
                <ul className ="dashed">
                  <li >one</li>
                  <li>tow</li>
                </ul>
              </div>
              <div className="col-span-2 text-center">
                <h6 className="mb-2 text-sm font-bold leading-5 tracking-wider">
                  Req
                </h6>
                <p>
                  name
                </p>
              </div>
              <div className="text-center">
                <p className="pt-2 underline">
                  details
                </p>
              </div>
            </div>
          </div>
          
        </CardBody>
      </Card>
    </div>
  );
}

export default Tables;
