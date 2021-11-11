import { useState } from 'react';
import uniqid from 'uniqid'


import ViewTitle from '../../../components/Layout/ViewTitle';
import GroupHeading from './GroupHeading';
import TextInput from '../../../components/Forms/TextField/TextInput';
import Button from '../../../components/Buttons/Button';

export default function CreateRecipe() {

    const [groupHeadings, setGroupHeading] = useState([
        { headingId: 1, }
    ]);


    const addGroupHeadingHandler = (e) => {
        e.preventDefault();
        let groupHeading = {
            headingId: uniqid(),
        }
        setGroupHeading(state => [
            ...state,
            groupHeading
        ])
    };

    const deleteGroupHeadingHandler = (e, headingId) => {
        e.preventDefault();

        setGroupHeading(state => state.filter(x => x.headingId !== headingId));

        console.log(`delete ${headingId}`);
    }

    let groupHeadingElements = groupHeadings.map(x => {
        return <GroupHeading
            key={x.headingId}
            name={'heading' + x.headingId}
            headingId={'crf-heading' + x.headingId}
            onDelete={deleteGroupHeadingHandler}
        />;
    })
    return (
        <section id="create-recipe" data-stellar-background-ratio="0.5">
            <div className="container">
                <div className="row">

                    <div className="col-md-6 col-sm-12">

                        <ViewTitle
                            title="Create Recipe"
                            className="form-control"
                        />

                        <form action="#" method="" className="wow fadeInUp" id="create-recipe-form" role="form" data-wow-delay="0.8s">

                            <div className="col-md-12 col-sm-12">
                                <TextInput
                                    type="text"
                                    inputClassName="form-control"
                                    id="crf-title"
                                    name="recipeTitle"
                                    placeholder="Recipe Title"
                                />
                            </div>

                            <div className="col-md-12 col-sm-12">
                                <input type="file" accept="image/*" className="form-control" id="crf-image" name="image" placeholder="Click to add photo" />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <Button
                                    type="submit"
                                    className="form-control"
                                    id="crf-btn-group-heading"
                                    name="btn-add-group-heading"
                                    text="Add group heading"
                                    onClick={addGroupHeadingHandler}
                                />
                            </div>


                            {groupHeadingElements}

                            <div className="col-md-5 col-sm-5">
                                <TextInput
                                    type="text"
                                    inputClassName="form-control"
                                    id="crf-ingredient"
                                    name="ingredient:1"
                                    placeholder="Ingredient Name"
                                />
                            </div>

                            <div className="col-md-4 col-sm-4">
                                <TextInput
                                    type="text"
                                    inputClassName="form-control"
                                    id="crf-unit"
                                    name="unit"
                                    placeholder="Unit"
                                />
                            </div>

                            <div className="col-md-3 col-sm-3">
                                <TextInput
                                    type="text"
                                    inputClassName="form-control"
                                    id="crf-quantity"
                                    name="quantity:1"
                                    placeholder="Quantity"
                                />
                            </div>

                            <div className="col-md-6 col-sm-6">
                                <Button
                                    type="submit"
                                    ClassName="form-control"
                                    id="crf-btn-add-ingredient"
                                    name="btn-add-ingredient"
                                    text="Add next ingredient"
                                />
                            </div>



                            <div className="col-md-12 col-sm-12">
                                <textarea className="form-control" rows="6" id="crf-directions" name="directions" placeholder="Directions"></textarea>

                                <button type="submit" className="form-control" id="crf-submit" name="submit">Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}