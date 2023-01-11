import { EventDetailPage } from 'modules';

import { EVENTDATA } from 'modules';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  query,
  req,
}) => {
  const existingEvent = EVENTDATA.find(
    (event) => event.id === Number(query.eventId)
  );

  if (!existingEvent) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      event: existingEvent,
      host: req.headers.host,
      ...(await serverSideTranslations(locale ?? 'en')),
    },
  };
};

export default EventDetailPage;
