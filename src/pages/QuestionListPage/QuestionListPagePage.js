import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from 'muicss/lib/react/button';
import TagsList from '../../components/molecules/TagsList';

const QuestionListItem = ({ title, tags, question_id }) => (
  <div id="content-wrapper" className="mui--text-center">
    <h3>{title}</h3>
    <div className="mb-2">
      <TagsList tags={tags} />
    </div>

    <div>
      <Link to={`/questions/${question_id}`}>
        <Button color="accent">More details</Button>
      </Link>
    </div>
  </div>
);

const QuestionList = ({ questions }) => (
  <div>
    {questions && questions.length ? (
      <div>
        {questions.map(question => (
          <QuestionListItem key={question.question_id} {...question} />
        ))}
      </div>
    ) : (
      <div>Loading questions...</div>
    )}
  </div>
);

const mapStateToProps = ({ questions }) => ({
  questions
});

export default connect(mapStateToProps)(QuestionList);
