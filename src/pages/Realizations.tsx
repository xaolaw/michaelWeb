import { Stack } from '@mui/material';
import React, { Fragment } from 'react';
import RealizationsCard from '../Components/RealizationsCard';
import {
  Description,
  Image,
  ProjectData,
  ProjectsList,
} from '../interface/inteface';
import { useFetchContenfulData } from '../services/ContentfulFetch';

function Realizations() {
  const { data, isLoading } = useFetchContenfulData('projects');

  const formatData = (rawData: any) => {
    return {
      projects: rawData.items.map(
        (item: any): ProjectData => ({
          name: item.fields.name,
          shortName: item.fields.shortName,
          slug: item.fields.slug,
          images: item.fields.image?.map(
            (image: any): Image => ({
              fileUrl: image.fields.file.url,
              fileName: image.fields.file.fileName,
              fileType: image.fields.file.contentType,
              title: image.fields.title,
            })
          ),
          description: item.fields.description.content.map(
            (desc: any): Description => ({
              value: desc.content.map((value: any) => {
                return value.value;
              }),
            })
          ),
        })
      ),
    };
  };

  const formattedData: ProjectsList = formatData(data);

  return (
    <Fragment>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Stack 
        direction="column"
        sx={{backgroundColor: "#f8f8f8"}} 
        alignItems="center"
        gap={3}
        >
          {formattedData.projects.map((project, index) => (
            <RealizationsCard key={index} project={project} />
          ))}
        </Stack>
      )}
    </Fragment>
  );
}

export default Realizations;
